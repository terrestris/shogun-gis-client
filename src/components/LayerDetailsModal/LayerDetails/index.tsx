import React, {
  useState,
  useEffect,
  useCallback
} from 'react';

import {
  Alert,
  Form,
  FormProps,
  Spin
} from 'antd';

import OlLayerImage from 'ol/layer/Image';
import OlLayer from 'ol/layer/Layer';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';
import { UrlUtil } from '@terrestris/base-util/dist/UrlUtil/UrlUtil';

import CapabilitiesUtil from '@terrestris/ol-util/dist/CapabilitiesUtil/CapabilitiesUtil';

import {
  isWmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import './index.less';

export type LayerDetailsProps = Partial<FormProps> & {
  layer?: OlLayer;
};

export const LayerDetails: React.FC<LayerDetailsProps> = ({
  layer,
  ...restProps
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [capabilities, setCapabilities] = useState<any>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const client = useSHOGunAPIClient();

  const {
    t
  } = useTranslation();

  const getCapabilities = useCallback(async () => {
    if (!layer || !isWmsLayer(layer)) {
      return;
    }

    try {
      setLoading(true);
      setErrorMessage('');
      setCapabilities(undefined);

      const capa = await CapabilitiesUtil.getWmsCapabilitiesByLayer(
        (layer as OlLayerImage<OlSourceImageWMS> | OlLayerTile<OlSourceTileWMS>), {
          headers: {
            ...layer.get('useBearerToken') ? {
              ...getBearerTokenHeader(client?.getKeycloak())
            } : undefined
          }
        });

      setCapabilities(capa);
    } catch (error) {
      Logger.error(error);
      setErrorMessage(t('LayerDetails.errorMessage'));
    } finally {
      setLoading(false);
    }
  }, [t, client, layer]);

  useEffect(() => {
    getCapabilities();
  }, [getCapabilities]);

  const getLayerName = () => {
    if (!layer || !isWmsLayer(layer)) {
      return;
    }

    return layer.getSource()?.getParams().LAYERS;
  };

  const getCapabilitiesUrl = () => {
    if (!layer || !isWmsLayer(layer)) {
      return;
    }

    let layerUrl;
    if (layer.getSource() instanceof OlSourceImageWMS) {
      layerUrl = (layer.getSource() as OlSourceImageWMS).getUrl();
    }
    if (layer.getSource() instanceof OlSourceTileWMS) {
      const urls = (layer.getSource() as OlSourceTileWMS).getUrls();
      layerUrl = urls ? urls[0] : undefined;
    }

    if (layerUrl) {
      return UrlUtil.createValidGetCapabilitiesRequest(layerUrl, 'WMS', '1.3.0');
    }
  };

  const getCapabilitiesLayer = () => {
    const layers: any[] = capabilities?.Capability?.Layer?.Layer;
    const layerName = getLayerName();
    let lay;
    if (Array.isArray(layers)) {
      lay = layers?.find(l => l?.Name === layerName);
    } else {
      return layers;
    }
    return lay;
  };

  const getBBox = () => {
    const lay = getCapabilitiesLayer();

    if (!lay || !lay.EX_GeographicBoundingBox) {
      return;
    }

    return [
      lay.EX_GeographicBoundingBox.westBoundLongitude,
      lay.EX_GeographicBoundingBox.southBoundLatitude,
      lay.EX_GeographicBoundingBox.eastBoundLongitude,
      lay.EX_GeographicBoundingBox.northBoundLatitude
    ].join(', ');
  };

  const getMinScale = () => {
    const lay = getCapabilitiesLayer();

    if (!lay) {
      return;
    }

    return lay.MinScaleDenominator;
  };

  const getMaxScale = () => {
    const lay = getCapabilitiesLayer();

    if (!lay) {
      return;
    }

    return lay.MaxScaleDenominator;
  };

  const getAbstract = () => {
    const lay = getCapabilitiesLayer();

    if (!lay) {
      return;
    }

    return lay.Abstract;
  };

  const getServiceAbstract = () => {
    return capabilities?.Service?.Abstract;
  };

  const getContact = () => {
    return capabilities?.Service?.ContactInformation?.ContactElectronicMailAddress;
  };

  const getLayerTitle = () => {
    const lay = getCapabilitiesLayer();

    if (!lay) {
      return;
    }

    return lay.Title;
  };

  const getAccessConstraints = () => {
    return capabilities?.Service?.AccessConstraints;
  };

  if (errorMessage) {
    return (
      <Alert
        type="error"
        closable={true}
        message={errorMessage}
      />
    );
  }

  return (
    <Spin
      spinning={loading}
    >
      <Form
        className="layer-details"
        layout="horizontal"
        size="small"
        labelAlign="left"
        labelWrap={true}
        labelCol={{
          flex: '150px'
        }}
        {...restProps}
      >
        <Form.Item
          name="layerName"
          label={t('LayerDetails.layerNameLabel')}
        >
          <span>{getLayerName() ? getLayerName() : t('LayerDetails.noDataPlaceholder')}</span>
        </Form.Item>
        <Form.Item
          name="layerTitle"
          label={t('LayerDetails.layerTitleLabel')}
        >
          <span>{getLayerTitle() ? getLayerTitle() : t('LayerDetails.noDataPlaceholder')}</span>
        </Form.Item>
        <Form.Item
          name="service-abstract"
          label={t('LayerDetails.serviceAbstractLabel')}
        >
          <span>{getServiceAbstract() ? getServiceAbstract() : t('LayerDetails.noDataPlaceholder')}</span>
        </Form.Item>
        <Form.Item
          name="abstract"
          label={t('LayerDetails.abstractLabel')}
        >
          <span>{getAbstract() ? getAbstract() : t('LayerDetails.noDataPlaceholder')}</span>
        </Form.Item>
        <Form.Item
          name="accessConstraints"
          label={t('LayerDetails.accessConstraintsLabel')}
        >
          <span>{getAccessConstraints() ? getAccessConstraints() : t('LayerDetails.noDataPlaceholder')}</span>
        </Form.Item>
        <Form.Item
          name="CapabilitiesUrl"
          label={t('LayerDetails.capabilitiesUrlLabel')}
        >
          <a href={getCapabilitiesUrl()}>{getCapabilitiesUrl()}</a>
        </Form.Item>
        <Form.Item
          name="contact"
          label={t('LayerDetails.contactLabel')}
        >
          {getContact() ? <a href={`mailto:${getContact()}`}>{getContact()}</a> : <span>{t('LayerDetails.noDataPlaceholder')}</span>}
        </Form.Item>
        <Form.Item
          name="minScale"
          label={t('LayerDetails.minScaleLabel')}
        >
          <span>{getMinScale() ? getMinScale() : t('LayerDetails.noDataPlaceholder')}</span>
        </Form.Item>
        <Form.Item
          name="maxScale"
          label={t('LayerDetails.maxScaleLabel')}
        >
          <span>{getMaxScale() ? getMaxScale() : t('LayerDetails.noDataPlaceholder')}</span>
        </Form.Item>
        <Form.Item
          name="bbox"
          label={t('LayerDetails.bboxLabel')}
        >
          <span>{getBBox() ? getBBox() : t('LayerDetails.noDataPlaceholder')}</span>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default LayerDetails;
