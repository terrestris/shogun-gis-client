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

import {
  Layout
} from '../';

export interface LayoutSelectProps extends SelectProps<string> {
  printManager: MapFishPrintV3Manager;
}

export const LayoutSelect: React.FC<LayoutSelectProps> = ({
  printManager,
  placeholder = 'Bitte wählen Sie eine Vorlage aus',
  value
}) => {

  const [layout, setLayout] = useState<any>(value);

  useEffect(() => {
    if (printManager) {
      printManager.setLayout(layout);
    }
  }, [printManager, layout]);

  useEffect(() => {
    setLayout(value);
  }, [value]);

  return (
    <Select
      placeholder={placeholder}
      value={layout}
      onChange={setLayout}
    >
      {
        printManager?.getLayouts().map((l: Layout) => (
          <Select.Option
            key={l.name}
            value={l.name}
          >
            {l.name}
          </Select.Option>
        ))
      }
    </Select>
  );
};

export default LayoutSelect;
