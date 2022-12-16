import React, {
  useEffect,
  useState
} from 'react';

import {
  Input
} from 'antd';
import {
  InputProps
} from 'antd/lib/input';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

interface CustomFieldInputProps extends InputProps {
  printManager: MapFishPrintV3Manager;
}

export const CustomFieldInput: React.FC<CustomFieldInputProps> = ({
  printManager,
  value,
  id,
  placeholder,
  maxLength,
  ...restProps
}): JSX.Element => {

  const [inputText, setInputText] = useState<any>(value);

  useEffect(() => {
    if (printManager && id) {
      printManager.setCustomParam(id, inputText);
    }
  }, [printManager, inputText, id]);

  useEffect(() => {
    setInputText(value);
  }, [value]);

  return (
    <Input
      id={id}
      value={inputText}
      onChange={(event) => setInputText(event.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      showCount={!!(maxLength && maxLength > 1)}
      {...restProps}
    />
  );
};

export default CustomFieldInput;
