import React from 'react';

import {
  faCircleQuestion
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import SimpleButton, { SimpleButtonProps } from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';

export type DocumentationButtonProps = SimpleButtonProps;

const defaultClassName = 'documentationbutton';
export const DocumentationButton: React.FC<DocumentationButtonProps> = ({
  className
}) => {

  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <SimpleButton
      type='link'
      onClick={() => window.open('/gis-docs', '_blank')}
      className={finalClassName}
      icon={
        <FontAwesomeIcon
          icon={faCircleQuestion}
        />
      }
    >
    </SimpleButton>
  );
};

export default DocumentationButton;
