import React, {
  useState
} from 'react';

import {
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Editor
} from '@monaco-editor/react';

import {
  Button,
  Modal,
  ModalProps
} from 'antd';
import { Dayjs } from 'dayjs';

import {
  useTranslation
} from 'react-i18next';

import './index.less';

export type ValueType = string | number | boolean | Dayjs;

export type JsonModalProps = {
  value?: string;
  label?: string;
} & ModalProps;

export const JsonModal: React.FC<JsonModalProps> = ({
  value,
  label,
  ...passThroughProps
}): JSX.Element => {

  const [isOpen, setIsOpen] = useState(false);

  const {
    t
  } = useTranslation();

  const onButtonClick = () => {
    setIsOpen(true);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  if (!value) {
    return <></>;
  }

  return (
    <>
      <Button
        className='json-modal-button'
        title={t('JsonModal.buttonTitle', {
          propertyName: label
        })}
        onClick={onButtonClick}
        icon={(
          <FontAwesomeIcon
            icon={faBoxOpen}
          />
        )}
      >
        {t('JsonModal.buttonTitle', {
          propertyName: label
        })}
      </Button>
      <Modal
        open={isOpen}
        onCancel={onCancel}
        width={800}
        title={label}
        footer={false}
        {...passThroughProps}
      >
        <Editor
          height="500px"
          language="json"
          value={JSON.stringify(JSON.parse(value), null, '  ')}
          options={{
            automaticLayout: true,
            readOnly: true,
            lineNumbers: 'off',
            scrollBeyondLastLine: false,
            minimap: {
              enabled: false
            },
            scrollbar: {
              useShadows: false
            },
            showFoldingControls: 'always',
            selectionHighlight: false,
            renderLineHighlight: 'none',
            occurrencesHighlight: 'off'
          }}
        />
      </Modal>
    </>
  );
};

export default JsonModal;
