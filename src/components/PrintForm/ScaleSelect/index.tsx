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

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

export interface ScaleSelectProps extends SelectProps<number> {
  printManager: MapFishPrintV3Manager;
}

export const ScaleSelect: React.FC<ScaleSelectProps> = ({
  printManager,
  placeholder,
  value,
  ...restProps
}): JSX.Element => {

  const map = useMap();

  const [scale, setScale] = useState<number>(0);

  useEffect(() => {
    if (printManager && scale) {
      printManager.setScale(scale);
    }
  }, [printManager, scale]);

  useEffect(() => {
    const updateScale = () => {
      const pmScale = printManager.getScale();
      if (pmScale) {
        setScale(pmScale);
      }
    };
    const transformInteraction = map?.getInteractions().getArray().find(i => {
      return i.get('name') === MapFishPrintV3Manager.TRANSFORM_INTERACTION_NAME;
    });

    if (printManager && transformInteraction) {
      // @ts-ignore
      transformInteraction.on('scaling', updateScale);

      return () => {
        // @ts-ignore
        transformInteraction.un('scaling', updateScale);
      };
    }
  }, [printManager, map]);

  useEffect(() => {
    if (value) {
      setScale(value);
    }
  }, [value]);

  return (
    <Select
      placeholder={placeholder}
      value={scale}
      onChange={setScale}
      {...restProps}
    >
      {
        printManager?.getScales().map((s: number) => (
          <Select.Option
            key={s}
            value={s}
          >
            {`1 : ${s.toLocaleString()}`}
          </Select.Option>
        ))
      }
    </Select>
  );
};

export default ScaleSelect;
