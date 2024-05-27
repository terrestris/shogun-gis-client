import * as React from 'react';
import {
  useEffect, useState
} from 'react';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import OlFeature from 'ol/Feature';
import OlGeometry from 'ol/geom/Geometry';
import OlVectorLayer from 'ol/layer/Vector';
import OlVectorSource from 'ol/source/Vector';

import {
  useTranslation
} from 'react-i18next';

import SimpleButton, { SimpleButtonProps } from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import { DigitizeUtil } from '@terrestris/react-util/dist/Util/DigitizeUtil';

const { confirm } = Modal;

interface OwnProps {
  /**
   * The vector layer which will be used for digitize features.
   * The standard digitizeLayer can be retrieved via `DigitizeUtil.getDigitizeLayer(map)`.
   */
  digitizeLayer?: OlVectorLayer<OlFeature>;
}

export type DeleteAllButtonProps = OwnProps & SimpleButtonProps;

/**
 * The className added to this component.
 */
const defaultClassName = 'deleteallbutton';

export const DeleteAllButton: React.FC<DeleteAllButtonProps> = ({
  className,
  digitizeLayer,
  ...passThroughProps
}) => {
  const [layers, setLayers] = useState<[OlVectorLayer<OlFeature>] | null>(null);

  const map = useMap();

  const {
    t
  } = useTranslation();

  useEffect(() => {
    if (!map) {
      return;
    }

    if (digitizeLayer) {
      setLayers([digitizeLayer]);
    } else {
      setLayers([DigitizeUtil.getDigitizeLayer(map)]);
    }
  }, [map, digitizeLayer]);

  if (!layers) {
    return null;
  }

  const onClick = () => {

    confirm({
      title: (t('DeleteAllButton.deleteAll')),
      content: (t('DeleteAllButton.confirmMessage')),
      icon: <ExclamationCircleOutlined />,
      onOk(){
        layers[0].getSource()?.clear();
      }
    });
  };

  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <SimpleButton
      onClick={onClick}
      className={finalClassName}
      {...passThroughProps}
    />
  );
};

export default DeleteAllButton;
