import React, {
  useEffect,
  useState
} from 'react';

import {
  Select
} from 'antd';
import {
  SelectProps
} from 'antd/lib/select';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

export interface OutputFormatSelectProps extends SelectProps<string> {
  printManager: MapFishPrintV3Manager;
  outputFormats: string[];
}

export const OutputFormatSelect: React.FC<OutputFormatSelectProps> = ({
  printManager,
  placeholder,
  value,
  outputFormats
}) => {

  const [outputFormat, setOutputFormat] = useState<any>(value);

  useEffect(() => {
    if (printManager) {
      printManager.setOutputFormat(outputFormat);
    }
  }, [printManager, outputFormat]);

  useEffect(() => {
    setOutputFormat(value);
  }, [value]);

  return (
    <Select
      placeholder={placeholder}
      value={outputFormat}
      onChange={setOutputFormat}
    >
      {
        outputFormats.map((f: string) => (
          <Select.Option
            key={f}
            value={f}
          >
            {f.toLocaleUpperCase()}
          </Select.Option>
        ))
      }
    </Select>
  );
};

export default OutputFormatSelect;
