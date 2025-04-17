import React from 'react';

export interface AttributeValueCellProps {
  value: any;
  attributeName: string;
  resultDrawerConfig?: {
    children?: {
      displayName?: string;
      fieldProps?: {
        urlDisplayValue?: string;
      };
    }[];
  } | null;
}

export const AttributeValueCell: React.FC<AttributeValueCellProps> = ({
  value,
  attributeName,
  resultDrawerConfig
}) => {
  let normalized = value;

  const isUrl = (val: string) => {
    return /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/.test(val);
  };

  if (
    Array.isArray(value) &&
    value.length === 1 &&
    typeof value[0] === 'string'
  ) {
    normalized = value[0];
  }

  if (
    typeof normalized === 'string' &&
    isUrl(normalized) &&
    resultDrawerConfig
  ) {
    const fieldConfig = resultDrawerConfig.children?.find(
      c => c.displayName === attributeName
    );
    const displayText = fieldConfig?.fieldProps?.urlDisplayValue || normalized;

    return (
      <a
        href={normalized}
        target="_blank"
        rel="noopener noreferrer"
      >
        {displayText}
      </a>
    );
  }

  return (
    <>
      {normalized == null || typeof normalized === 'object'
        ? ''
        : normalized}
    </>
  );
};
