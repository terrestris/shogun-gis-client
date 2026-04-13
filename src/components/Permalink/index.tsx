import React, {
  useEffect,
  useState,
  useMemo
} from 'react';

import {
  CopyOutlined,
  MailOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
import {
  Input,
  Tooltip
} from 'antd';
import useNotification from 'antd/lib/notification/useNotification';

import copy from 'copy-to-clipboard';

import {
  EventsKey
} from 'ol/events';
import BaseLayer from 'ol/layer/Base';
import LayerGroup from 'ol/layer/Group';
import ImageLayer from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';
import {
  unByKey
} from 'ol/Observable';
import {
  useTranslation
} from 'react-i18next';

import {
  PermalinkUtil
} from '@terrestris/ol-util/dist/PermalinkUtil/PermalinkUtil';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import Layer from '@terrestris/shogun-util/dist/model/Layer';

import useLocalize from '../../hooks/useLocalize';

import './index.less';

export const Permalink: React.FC = () => {
  const map = useMap();
  const layerAttributes = useMemo(() => [
    'layerConfig',
    'isExternalLayer',
    'isUploadedLayer',
    'groupName'
  ], []);
  const {
    t
  } = useTranslation();
  const localize = useLocalize();
  const [notification, contextHolder] = useNotification();

  const initialPermalink = map ? PermalinkUtil.getLink(
    map,
    ';',
    l => localize(l.get('name')),
    l => (l instanceof TileLayer || l instanceof ImageLayer) && l.getVisible(),
    layerAttributes
  ) : '';

  const [permalink, setPermalink] = useState(initialPermalink);

  const mailSubject = 'SHOGun Web-GIS';
  const mailBody = `Hey,\r\ncheck out the layer-composition I created:\r\n\r\n${permalink}`;

  useEffect(() => {
    if (!map) {
      return;
    }
    const eventKeys: EventsKey[] = [];

    const identifierFunction = (l: BaseLayer) => localize(l.get('name'));
    const filterFunction = (l: BaseLayer) => (l instanceof TileLayer || l instanceof ImageLayer) && l.getVisible();
    const updatePermalink = () => {
      setPermalink(PermalinkUtil.getLink(
        map,
        ';',
        identifierFunction,
        filterFunction,
        layerAttributes
      ));
    };

    const updateLayerConfig = () => {
      const externalLayers = map.getAllLayers().filter(l => l.get('isExternalLayer') || l.get('isUploadedLayer'));
      externalLayers.forEach(externalLayer => {
        const layerConfig = externalLayer.get('layerConfig') as Layer;
        if (layerConfig) {
          if (layerConfig.clientConfig) {
            layerConfig.clientConfig.opacity = externalLayer.getOpacity();
          } else {
            layerConfig.clientConfig = {
              opacity: externalLayer.getOpacity()
            };
          }
          externalLayer.set('layerConfig', layerConfig);
        }
      });
      updatePermalink();
    };

    const registerLayerCallback = (layerGroup: LayerGroup) => {
      const layersInGroup = layerGroup.getLayers().getArray();
      for (const layerInGroup of layersInGroup) {
        if (layerInGroup instanceof LayerGroup) {
          registerLayerCallback(layerInGroup);
        } else {
          const eventKeyVisibility = layerInGroup.on('change:visible', updatePermalink);
          const eventKeyOpacity = layerInGroup.on('change:opacity', updateLayerConfig);
          eventKeys.push(eventKeyVisibility, eventKeyOpacity);
        }
      }
    };

    const listenerKeyCenter = map.getView().on('change:center', updatePermalink);
    const listenerKeyResolution = map.getView().on('change:resolution', updatePermalink);

    const mapLayerGroup = map.getLayerGroup();
    registerLayerCallback(mapLayerGroup);
    updateLayerConfig();

    return () => {
      unByKey(listenerKeyCenter);
      unByKey(listenerKeyResolution);
      unByKey(eventKeys);
    };
  }, [layerAttributes, localize, map, t]);

  const onWhatsAppClick = () => {
    const whatsAppUrl = new URL('https://wa.me');
    whatsAppUrl.searchParams.set('text', mailBody);
    window.open(whatsAppUrl);
  };

  const onMailClick = () => {
    const mailToUrl = new URL('mailto:');
    mailToUrl.searchParams.set('subject', mailSubject);
    mailToUrl.searchParams.set('body', mailBody);
    window.open(mailToUrl.toString().replace(/\+/g, '%20'), '_self');
  };

  const onCopyClick = () => {
    const success = copy(permalink);
    if (success) {
      notification.info({
        title: t('Permalink.copiedToClipboard')
      });
    } else {
      notification.info({
        title: t('Permalink.copyToClipboardFailed')
      });
    }
  };

  return (
    <div className="permalink-wrapper">
      {contextHolder}
      <div className="icons">
        <Tooltip title={t('Permalink.whatsAppTooltip')}>
          <WhatsAppOutlined onClick={onWhatsAppClick} />
        </Tooltip>
        <Tooltip title={t('Permalink.mailTooltip')}>
          <MailOutlined onClick={onMailClick} />
        </Tooltip>
      </div>
      <div
        className="link"
        aria-label='permalink-url'
      >
        <Input value={permalink}
          readOnly
        />
        <Tooltip title={t('Permalink.copyTooltip')}>
          <CopyOutlined onClick={onCopyClick} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Permalink;
