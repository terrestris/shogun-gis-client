import React from 'react';

import {
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  ButtonProps,
  Popconfirm
} from 'antd';

import {
  Feature
} from 'geojson';

import {
  useTranslation
} from 'react-i18next';

import {
  Logger
} from '@terrestris/base-util';

export type DeleteButtonProps = ButtonProps & {
  feature: Feature;
  layerId?: string;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  feature,
  layerId,
  ...passThroughProps
}) => {

  const {
    t
  } = useTranslation();

  const onConfirmDelete = async () => {
    try {
      // TODO call WFS-T delete transaction
    } catch (error) {
      Logger.error(error);
    }
  };

  return (
    <Popconfirm
      title={t('DeleteButton.confirm')}
      onConfirm={onConfirmDelete}
      placement='bottomRight'
    >
      <Button
        type='primary'
        danger
        icon={(
          <FontAwesomeIcon
            icon={faTrash}
          />
        )}
        {...passThroughProps}
      >
        {
          t('DeleteButton.title')
        }
      </Button>
    </Popconfirm>
  );
};

export default DeleteButton;
