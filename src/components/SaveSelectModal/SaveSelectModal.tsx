import React from 'react';

import {
  CopyOutlined
} from '@ant-design/icons';

import {
  Button,
  Modal,
  ModalProps,
  message,
  Input,
  Tooltip,
  Divider
} from 'antd';

import copy from 'copy-to-clipboard';

import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
  hide as hideSelect
} from '../../store/saveSelectModal';

import './SaveSelectModal.less';

import PermalinkUtil from '@terrestris/ol-util/dist/PermalinkUtil/PermalinkUtil';

export type SaveSelectModalProps = {} & Partial<ModalProps>;

export const SaveSelectModal: React.FC<SaveSelectModalProps> = ({
}): JSX.Element => {
  const isModalVisible = useAppSelector(state => state.saveSelectModal.visible);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  let map = useMap();
  let link = PermalinkUtil.getLink(map)

  const closeModal = () => {
    dispatch(hideSelect());
  };

  function onCopyClick() {
    const success = copy(link);

    if (success) {
      message.info(t('SaveSelectModal.success'));
    } else {
      message.info(t('SaveSelectModal.failure'));
    }
  };

  return (
    <Modal
      className="save-select-modal"
      title={t('SaveSelectModal.title')}
      visible={isModalVisible}
      onCancel={closeModal}
      footer={[
        <Button
          key="close"
          onClick={closeModal}
        >
          {t('SaveSelectModal.close')}
        </Button>
      ]}
    >
      <p>
        {t('SaveSelectModal.info')}
      </p>
      <div>
        URL
        <Divider
          type="vertical"
        />
        <Tooltip title={t('SaveSelectModal.tooltip')}>
          <CopyOutlined onClick={onCopyClick} />
        </Tooltip>
      </div>
      <div className="link">
        <Input value={link} readOnly />
      </div>
    </Modal>
  );
};
export default SaveSelectModal;
