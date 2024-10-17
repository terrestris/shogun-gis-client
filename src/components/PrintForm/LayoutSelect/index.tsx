import React, {
  useEffect,
  useRef,
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
  onValueChange: () => void;
}

export const LayoutSelect: React.FC<LayoutSelectProps> = ({
  printManager,
  onValueChange,
  placeholder = 'Bitte wählen Sie eine Vorlage aus',
  value,
  ...restProps
}): JSX.Element => {

  const [layout, setLayout] = useState<any>(value);
  const prevLayoutRef = useRef<string | null | undefined>(layout);

  useEffect(() => {
    prevLayoutRef.current = value;
  }, [value]);

  useEffect(() => {
    if (printManager) {
      printManager.setLayout(layout);
      if (prevLayoutRef.current !== layout) {
        onValueChange();
      }
    }
  }, [printManager, layout, onValueChange, value]);

  useEffect(() => {
    setLayout(value);
  }, [value]);

  return (
    <Select
      placeholder={placeholder}
      value={layout}
      onChange={setLayout}
      {...restProps}
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
