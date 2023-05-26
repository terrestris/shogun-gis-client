import {
  FormInstance
} from 'antd';

import {
  isMoment
} from 'moment';

import {
  isEmpty
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatWFS, {
  WriteTransactionOptions as OlWriteTransactionOptions
} from 'ol/format/WFS';

import {
  useMap
} from '@terrestris/react-geo';
import {
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

export type WriteWfsTransactionOpts = {
  layer: WmsLayer;
  upsertFeatures?: OlFeature[];
  deleteFeatures?: OlFeature[];
  form?: FormInstance;
};

export const useWriteWfsTransaction = () => {
  const map = useMap();

  const cleanFormValues = (form: FormInstance) => {
    const formValues = {...form.getFieldsValue()};

    for (const [key, value] of Object.entries(formValues)) {
      // Transform undefined to null values.
      if (value === undefined) {
        formValues[key] = null;
      }

      // Filter out read-only fields (which don't have any field instance associated).
      if (!form.getFieldInstance(key)) {
        delete formValues[key];
      }

      // Transform moments back to iso string.
      if (isMoment(value)) {
        formValues[key] = value.toISOString();
      }
    }

    return formValues;
  };

  const writeWfsTransaction = (opts: WriteWfsTransactionOpts) => {
    if (!map) {
      return;
    }

    const inserts: OlFeature[] = [];
    const updates: OlFeature[] = [];
    const deletes: OlFeature[] = [];

    if (opts.upsertFeatures) {
      for (const feature of opts.upsertFeatures) {
        const geometry = feature.getGeometry();

        if (!geometry || isEmpty(geometry.getExtent())) {
          continue;
        }

        const feat = new OlFeature({
          geom: geometry
        });

        // TODO Get geom column name dynamically
        feat.setGeometryName('geom');

        if (opts.form) {
          feat.setProperties(cleanFormValues(opts.form));
        }

        const updateMode = !!feature.getId();

        if (updateMode) {
          feat.setId(feature.getId());
        }

        if (updateMode) {
          updates.push(feat);
        } else {
          inserts.push(feat);
        }
      };
    }

    if (opts.deleteFeatures) {
      deletes.push(...opts.deleteFeatures);
    }

    const transactionOpts: OlWriteTransactionOptions = {
      // TODO Get NS dynamically
      featureNS: 'http://localhost/SHOGUN',
      featurePrefix: opts.layer.getSource()?.getParams().LAYERS.split(':')[0],
      featureType: opts.layer.getSource()?.getParams().LAYERS,
      srsName: map.getView().getProjection().getCode(),
      version: '1.0.0',
      nativeElements: []
    };

    const format = new OlFormatWFS();

    return format.writeTransaction(inserts, updates, deletes, transactionOpts);
  };

  return writeWfsTransaction;
};

export default useWriteWfsTransaction;
