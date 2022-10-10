import React, {
  useEffect, useState, useMemo
} from 'react';

import {
  CopyOutlined,
  MailOutlined,
  TwitterOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
import {
  Input, Tooltip, message
} from 'antd';
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

import PermalinkUtil from '@terrestris/ol-util/dist/PermalinkUtil/PermalinkUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';

interface DefaultPermalinkProps { }

export interface PermalinkProps extends Partial<DefaultPermalinkProps> { }

export const Permalink: React.FC<PermalinkProps> = () => {
  const map = useMap();
  const layerAttributes = useMemo(() => ['layerConfig', 'isExternalLayer', 'groupName'], []);
  const {
    t
  } = useTranslation();

  const initialPermalink = map ? PermalinkUtil.getLink(
    map,
    ';',
    l => l.get('name'),
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
    let eventKeys: EventsKey[] = [];

    const identifierFunction = (l: BaseLayer) => l.get('name');
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

    const filterFunctionForLayers = (l: BaseLayer) => (l instanceof TileLayer || l instanceof ImageLayer);
    const updateLayersInPermalink = () => {
      setPermalink(
        PermalinkUtil.getLink(
          map,
          ';',
          identifierFunction,
          filterFunctionForLayers,
          layerAttributes
        )
      );
    };

    const updateLayerConfig = () => {
      const externalLayers = map.getAllLayers().filter(l => l.get('isExternalLayer'));
      externalLayers.forEach((externalLayer) => {
        const layerConfig = externalLayer.get('layerConfig');
        if (layerConfig) {
          layerConfig.opacity = externalLayer.getOpacity();
          externalLayer.set('layerConfig', layerConfig);
        }
      });
      updatePermalink();
    };

    const registerLayerCallback = (layerGroup: LayerGroup) => {
      const layersInGroup = layerGroup.getLayers().getArray();
      for (let i = 0; i < layersInGroup.length; i++) {
        const layerInGroup = layersInGroup[i];

        if (layerInGroup instanceof LayerGroup) {
          registerLayerCallback(layerInGroup);
        } else {
          let eventKeyVisibility = layerInGroup.on('change:visible', updatePermalink);
          let eventKeyOpacity = layerInGroup.on('change:opacity', updateLayerConfig);
          eventKeys.push(eventKeyVisibility, eventKeyOpacity);
        }
      }
    };

    const layerGroups = map.getLayers().getArray().filter((l) => l.get('isGroupForImportedLayers'));
    layerGroups.forEach((layerGroup) => {
      // @ts-ignore
      eventKeys.push(layerGroup.getLayers().on('add', updateLayersInPermalink));
      // @ts-ignore
      eventKeys.push(layerGroup.getLayers().on('remove', updateLayersInPermalink));
    });

    const listenerKeyCenter = map.getView().on('change:center', updatePermalink);
    const listenerKeyResolution = map.getView().on('change:resolution', updatePermalink);

    let mapLayerGroup = map.getLayerGroup();
    registerLayerCallback(mapLayerGroup);
    updateLayerConfig();

    return () => {
      unByKey(listenerKeyCenter);
      unByKey(listenerKeyResolution);
      unByKey(eventKeys);
    };
  }, [layerAttributes, map, t]);

  function onTwitterClick() {
    const twitterUrl = new URL('https://twitter.com/intent/tweet');
    twitterUrl.searchParams.set('url', mailBody);
    window.open(twitterUrl);
  }

  function onWhatsAppClick() {
    const whatsAppUrl = new URL('https://wa.me');
    whatsAppUrl.searchParams.set('text', mailBody);
    window.open(whatsAppUrl);
  }

  function onMailClick() {
    const mailToUrl = new URL('mailto:');
    mailToUrl.searchParams.set('subject', mailSubject);
    mailToUrl.searchParams.set('body', mailBody);
    window.open(mailToUrl.toString().replace(/\+/g, '%20'), '_self');
  }

  function onCopyClick() {
    const success = copy(permalink);
    if (success) {
      message.info(t('Permalink.copiedToClipboard'));
    } else {
      message.info(t('Permalink.copyToClipboardFailed'));
    }
  }

  return (
    <div className="permalink">
      <div className="icons">
        <Tooltip title={t('Permalink.twitterTooltip')}>
          <TwitterOutlined onClick={onTwitterClick} />
        </Tooltip>
        <Tooltip title={t('Permalink.whatsAppTooltip')}>
          <WhatsAppOutlined onClick={onWhatsAppClick} />
        </Tooltip>
        <Tooltip title={t('Permalink.mailTooltip')}>
          <MailOutlined onClick={onMailClick} />
        </Tooltip>
      </div>
      <div className="link">
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
