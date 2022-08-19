import React from 'react';

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
  useTranslation
} from 'react-i18next';

import PermalinkUtil from '@terrestris/ol-util/dist/PermalinkUtil/PermalinkUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';
import VectorLayer from 'ol/layer/Vector';
import ImageLayer from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';

interface DefaultPermalinkProps { }

export interface PermalinkProps extends Partial<DefaultPermalinkProps> { }

export const Permalink: React.FC<PermalinkProps> = () => {

  const map = useMap();
  const {
    t
  } = useTranslation();

  if (!map) {
    return <></>;
  }

  const link = PermalinkUtil.getLink(map, ';', l => l.get('name'), l => (l instanceof TileLayer || l instanceof ImageLayer) && l.getVisible());

  const mailSubject = 'SHOGun Web-GIS';
  const mailBody = `Hey,\r\ncheck out the layer-composition I created:\r\n\r\n${link}`;

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
    const success = copy(link);
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
        <Input value={link}
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
