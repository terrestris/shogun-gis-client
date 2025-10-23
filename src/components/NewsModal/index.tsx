import React, {
  useCallback,
  useEffect, useMemo, useState
} from 'react';

import {
  Modal, Checkbox, CheckboxChangeEvent,
  Row,
  Col,
  Pagination
} from 'antd';

import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

import Logger from '@terrestris/base-util/dist/Logger';

import useAppSelector from '../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

export const NewsModal: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const client = useSHOGunAPIClient();

  const newsTextIds = useAppSelector(state => state.newsTextIds);
  // only show those entries which are not hidden
  const newsTextIdsPresent = useMemo(() => {
    return newsTextIds.filter(id => {
      const hidden = JSON.parse(localStorage.getItem('hide-news-modal-' + id.toString()) || 'false');
      return !hidden;
    });
  }, [newsTextIds]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(newsTextIdsPresent.length > 0);
  const [markdownContents, setMarkdownContents] = useState<{ title: string | undefined; markdown: string | undefined; checked: boolean }[]>([]);

  const fetchTextualContents = useCallback(async (id: number) => {
    try {
      const textualContents = client?.textualContent().findOne(id);
      return textualContents;
    } catch (error) {
      Logger.error(`Error fetching textual content with id ${id}: ${error}`);
    }
  }, [client]);

  useEffect(() => {
    const getAllContents = async () => {
      try {
        const contentsPromises = newsTextIdsPresent.map(id => fetchTextualContents(id));
        const contentsResults = await Promise.all(contentsPromises);
        const markdownResults = contentsResults
          .filter(r => r && r.markdown && r.title)
          .map(r => ({
            title: r!.title,
            markdown: r!.markdown,
            checked: JSON.parse(localStorage.getItem('hide-news-modal-' + r!.id) || 'false')
          }));
        setMarkdownContents(markdownResults);
      } catch (error) {
        Logger.error(error);
      }
    };

    if (newsTextIdsPresent.length > 0) {
      getAllContents();
    }
  }, [client, fetchTextualContents, newsTextIdsPresent]);

  const onChange = (evt: CheckboxChangeEvent) => {
    const checked = evt.target.checked;
    if (newsTextIdsPresent[currentIndex] != null) {
      localStorage.setItem(
        'hide-news-modal-' + newsTextIdsPresent[currentIndex].toString(),
        JSON.stringify(checked)
      );

      setMarkdownContents(prev => {
        const newContents = [...prev];
        newContents[currentIndex] = {
          ...newContents[currentIndex],
          checked
        };
        return newContents;
      });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentIndex(page-1);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (markdownContents.length === 0) {
    return <></>;
  }

  return (
    <>
      <Modal
        title={markdownContents[currentIndex].title}
        closable={true}
        maskClosable={false}
        footer={
          <Row justify="space-between"
            align="middle"
          >
            <Col>
              <Checkbox
                onChange={onChange}
                checked={markdownContents[currentIndex].checked}
              >
                {t('NewsModal.hideModalCheckboxTitle')}
              </Checkbox>
            </Col>
            <Col>
              <Pagination
                current={currentIndex + 1}
                total={markdownContents.length}
                pageSize={1}
                onChange={handlePageChange}
                showSizeChanger={false}
                showQuickJumper={false}
              />
            </Col>
          </Row>
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
          children={markdownContents[currentIndex].markdown}
        />
      </Modal>
    </>
  );
};

export default NewsModal;
