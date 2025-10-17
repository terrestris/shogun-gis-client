import React, {
  useEffect, useState
} from 'react';

import {
  Modal, Checkbox, CheckboxChangeEvent
} from 'antd';

import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

import Logger from '@terrestris/base-util/dist/Logger';

import { getBearerTokenHeader } from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppSelector from '../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

import TextualContent from './TextualContents/model/TextualContent';
import TextualContentService from './TextualContents/service/TextualContentService';

export const NewsModal: React.FC = (): JSX.Element => {
  const {
    t
  } = useTranslation();
  const client = useSHOGunAPIClient();

  const newsTextId = useAppSelector(state => state.newsText);
  const newsTextPresent = newsTextId > -1 || false;
  const [isModalOpen, setIsModalOpen] = useState(newsTextPresent && !JSON.parse(localStorage.getItem('hide-news-modal') || 'false'));
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [markdownTitle, setMarkdownTitle] = useState<string>('');

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchTextualContents = async () => {
      const reqOpts = {
        method: 'GET',
        headers: {
          ...getBearerTokenHeader(client?.getKeycloak())
        }
      };

      try {
        const textualContentService = new TextualContentService();
        const textualContents = await textualContentService.findAll(undefined, reqOpts);

        textualContents.content.forEach((textualContent: TextualContent) => {
          textualContent.modified = new Date(textualContent.modified!);
          textualContent.created = new Date(textualContent.created!);
        });
        return textualContents.content;

      } catch (error) {
        Logger.error(`Error fetching all textual contents: ${error}`);
      }
    };

    const getTextualContent = async () => {
      try {
        const textualContents = await fetchTextualContents();

        if (textualContents && newsTextId) {
          const markdownEntry = textualContents.find(item => item.id === newsTextId)?.markdown;
          const title = textualContents.find(item => item.id === newsTextId)?.title;
          if (markdownEntry && title) {
            setMarkdownContent(markdownEntry);
            setMarkdownTitle(title);
          } else {
            setMarkdownContent('');
            setMarkdownTitle('');
          }
        }
      } catch (error) {
        Logger.error(error);
      }
    };

    getTextualContent();
  }, [client, newsTextId]);

  const onChange = (evt: CheckboxChangeEvent) => {
    const checked = evt.target.checked;

    localStorage.setItem('hide-news-modal', JSON.stringify(checked));
  };

  return (
    <>
      {newsTextPresent &&
      <Modal
        title={markdownTitle}
        closable={true}
        maskClosable={false}
        footer={
          <Checkbox
            onChange={onChange}
            defaultChecked={localStorage.getItem('hide-news-modal') === 'true'}
          >
            {t('NewsModal.hideModalCheckboxTitle')}
          </Checkbox>
        }
        centered={true}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeRaw,
            rehypeSanitize,
            [rehypeExternalLinks, {
              target: '_blank',
              rel: ['noopener', 'noreferrer']
            }]
          ]}
          children={markdownContent}
        />
      </Modal>
      }
    </>
  );
};

export default NewsModal;
