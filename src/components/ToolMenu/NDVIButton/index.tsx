import React, { useState } from 'react';

import { PoweroffOutlined } from '@ant-design/icons';

import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';
import { Button, Modal } from 'antd';

interface DefaultNDVIButtonProps {

}

export interface MeasureProps extends Partial<DefaultNDVIButtonProps> { }

export const NDVIButton: React.FC<MeasureProps> = ({
}): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const {
    t
  } = useTranslation();

  const map = useMap();

  const enterLoading = (index: number) => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });

      setIsModalVisible(true);

    }, 3000);

  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!map) {
    return <></>;
  }

  return (
    <>
      <Button
      type="primary"
      loading={loadings[1]}
      onClick={() => enterLoading(1)}
      className="NDVIButton"
      >
        {t('NDVI.title')}
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default NDVIButton;
