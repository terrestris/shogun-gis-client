import React from 'react';

import {
  faRotateLeft
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  ButtonProps
} from 'antd';

import {
  FormInstance
} from 'antd/lib/form/Form';

import {
  useTranslation
} from 'react-i18next';

export type ResetButtonProps = Omit<ButtonProps, 'form'> & {
  form: FormInstance;
};

export const ResetButton: React.FC<ResetButtonProps> = ({
  form,
  ...passThroughProps
}) => {

  const {
    t
  } = useTranslation();

  const onClick = () => {
    form.resetFields();
  };

  return (
    <Button
      onClick={onClick}
      icon={(
        <FontAwesomeIcon
          icon={faRotateLeft}
        />
      )}
      {...passThroughProps}
    >
      {
        t('ResetButton.title')
      }
    </Button>
  );
};

export default ResetButton;
