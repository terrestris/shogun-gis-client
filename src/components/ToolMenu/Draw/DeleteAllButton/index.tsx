import * as React from 'react';
import {
  useEffect, useState
} from 'react';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import OlGeometry from 'ol/geom/Geometry';
import { SelectEvent as OlSelectEvent } from 'ol/interaction/Select';
import OlVectorLayer from 'ol/layer/Vector';
import OlVectorSource from 'ol/source/Vector';

import {
  useTranslation
} from 'react-i18next';

import {SimpleButton, useMap} from '@terrestris/react-geo';
import { SimpleButtonProps } from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import { DigitizeUtil } from '@terrestris/react-util/dist/Util/DigitizeUtil';

const { confirm } = Modal;

interface OwnProps {
  /**
   * The vector layer which will be used for digitize features.
   * The standard digitizeLayer can be retrieved via `DigitizeUtil.getDigitizeLayer(map)`.
   */
  digitizeLayer?: OlVectorLayer<OlVectorSource<OlGeometry>>;
  /**
   * Listener function for the 'select' event of the ol.interaction.Select
   * if in `Delete` mode.
   * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-SelectEvent.html
   * for more information.
   */
  onFeatureRemove?: (event: OlSelectEvent) => void;
}

export type DeleteAllButtonProps = OwnProps & SimpleButtonProps;

/**
 * The className added to this component.
 */
const defaultClassName = 'deleteallbutton';

export const DeleteAllButton: React.FC<DeleteAllButtonProps> = ({
  className,
  digitizeLayer,
  onFeatureRemove,
  ...passThroughProps
}) => {
  const [layers, setLayers] = useState<[OlVectorLayer<OlVectorSource<OlGeometry>>]|null>(null);

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
      title: (t('Draw.deleteAll')),
      content: (t('Draw.confirmMessage')),
      icon: <ExclamationCircleOutlined />,
      onOk(){

        layers[0].getSource()?.clear();

      }

    });

  };

  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return <SimpleButton
    onClick={onClick}
    className={finalClassName}
    {...passThroughProps}
  />;
};

export default DeleteAllButton;
