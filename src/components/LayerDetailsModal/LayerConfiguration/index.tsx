import React, {
  useState,
  useEffect,
  useCallback
} from 'react';

import {
  Alert,
  Spin
} from 'antd';

import OlLayer from 'ol/layer/Layer';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import Layer from '@terrestris/shogun-util/dist/model/Layer';

import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import './index.less';

export type LayerConfigurationProps = React.ComponentProps<'pre'> & {
  layer?: OlLayer;
};

export const LayerConfiguration: React.FC<LayerConfigurationProps> = ({
  layer,
  ...restProps
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [layerConfiguration, setLayerConfiguration] = useState<Layer>();

  const client = useSHOGunAPIClient();

  const {
    t
  } = useTranslation();

  const getLayerConfiguration = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage('');

      if (!layer || !layer.get('shogunId')) {
        throw new Error('No layer provided or the layer has no shogunId set');
      }

      const conf = await client?.layer().findOne(layer.get('shogunId'));

      setLayerConfiguration(conf);
    } catch (error) {
      Logger.error(error);
      setErrorMessage(t('LayerConfiguration.errorMessage'));
    } finally {
      setLoading(false);
    }
  }, [t, client, layer]);

  useEffect(() => {
    getLayerConfiguration();
  }, [getLayerConfiguration]);

  if (errorMessage) {
    return (
      <Alert
        type="error"
        closable={true}
        title={errorMessage}
      />
    );
  }

  return (
    <Spin
      spinning={loading}
    >
      <pre
        className="layer-configuration"
        {...restProps}
      >
        <code>
          {
            JSON.stringify(layerConfiguration, null, '  ')
          }
        </code>
      </pre>
    </Spin>
  );
};

export default LayerConfiguration;
