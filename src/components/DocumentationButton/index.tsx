import React from 'react';

import {
  faCircleQuestion
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Tooltip
} from 'antd';
import { ButtonProps } from 'antd/lib';

import { useTranslation } from 'react-i18next';

export type DocumentationButtonProps = ButtonProps;

const defaultClassName = 'documentationbutton';
export const DocumentationButton: React.FC<DocumentationButtonProps> = ({
  className
}) => {

  const { t } = useTranslation();

  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <Tooltip
      title={t('DocumentationButton.tooltip')}
    >
      <Button
        type="link"
        aria-label="documentation-button"
        onClick={() => window.open('/gis-docs', '_blank')}
        className={finalClassName}
        icon={
          <FontAwesomeIcon
            icon={faCircleQuestion}
          />
        }
      />
    </Tooltip>
  );
};

export default DocumentationButton;
