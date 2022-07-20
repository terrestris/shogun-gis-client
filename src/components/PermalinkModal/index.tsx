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

interface DefaultSharePanelProps { }

export interface SharePanelProps extends Partial<DefaultSharePanelProps> { }

export const SharePanel: React.FC<SharePanelProps> = () => {

  const map = useMap();
  const {
    t
  } = useTranslation();

  if (!map) {
    return <></>;
  }

  const link = PermalinkUtil.getLink(map);

  // TODO: these could be props
  const mailSubject = 'Geoportal Raumordnung Kartenviewer';
  const mailBody = `Hey,\r\nsieh dir an was ich im Geoportal Raumordnung Baden-Württemberg gefunden habe:\r\n${link}`;

  function onTwitterClick() {
    const twitterUrl = new URL('https://twitter.com/intent/tweet');
    twitterUrl.searchParams.set('url', mailBody);
    window.open(twitterUrl);
  }

  function onWhatsAppClick() {
    const whatsAppUrl = new URL('http://wa.me');
    whatsAppUrl.searchParams.set('text', mailBody);
    window.open(whatsAppUrl);
  }

  function onMailClick() {
    const mailToUrl = new URL('mailto:');
    mailToUrl.searchParams.set('subject', mailSubject);
    mailToUrl.searchParams.set('body', mailBody);
    window.open(mailToUrl.toString().replace(/\+/g, '%20'));
  }

  function onCopyClick() {
    const success = copy(link);
    if (success) {
      message.info(t('SharePanel.copiedToClipboard'));
    } else {
      message.info(t('SharePanel.copyToClipboardFailed'));
    }
  }

  return (
    <div className="share-panel">
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

export default SharePanel;
