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

export interface ResolutionSelectProps extends SelectProps<number> {
  printManager: MapFishPrintV3Manager;
}

export const ResolutionSelect: React.FC<ResolutionSelectProps> = ({
  printManager,
  placeholder,
  value
}) => {

  const [resolution, setResolution] = useState<any>(value);

  useEffect(() => {
    if (printManager) {
      printManager.setDpi(resolution);
    }
  }, [printManager, resolution]);

  useEffect(() => {
    setResolution(value);
  }, [value]);

  return (
    <Select
      placeholder={placeholder}
      value={resolution}
      onChange={setResolution}
    >
      {
        printManager?.getDpis().map((d: number) => (
          <Select.Option
            key={d}
            value={d}
          >
            {`${d} DPI`}
          </Select.Option>
        ))
      }
    </Select>
  );
};

export default ResolutionSelect;
