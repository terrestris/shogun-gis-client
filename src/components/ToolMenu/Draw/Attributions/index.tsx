import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  faMinusSquare
} from '@fortawesome/free-regular-svg-icons';
import {
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Drawer,
  DrawerProps,
  Form,
  FormListFieldData,
  Popconfirm,
  notification,
  Row
} from 'antd';

import OlFeature from 'ol/Feature';
import OlGeometry from 'ol/geom/Geometry';
import Select from 'ol/interaction/Select';

import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-util/dist/Util/DigitizeUtil';

import AttributionRow from './AttributionRow';

import {
  DigitizeUtil
} from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import AttributionRow from './AttributionRow';

import './index.less';

export type FormData = {
  fields?: [{
    name?: string;
    value?: string;
  }];
};

export interface AttributionDrawerProps extends DrawerProps {
  onCustomClose?: (open: boolean) => void;
}

const AttributionDrawer: React.FC<AttributionDrawerProps> = ({
  onCustomClose,
  open,
  onClose,
  ...passThroughProps
}) => {
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();
  const [isFormValid, setIsFormIsValid] = useState(true);
  const [availableFeatureCollectionAttributes, setAvailableFeatureCollectionAttributes] = useState<string[]>([]);
  const [availableFeatureAttributes, setAvailableFeatureAttributes] = useState<string[]>([]);
  const [, contextHolder] = notification.useNotification();
  const [form] = Form.useForm<FormData>();

  const map = useMap();

  const {
    t
  } = useTranslation();

  const updateAvailableFeatureAttributes = useCallback((fields: FormData) => {
    const currentKeys = fields.fields
      ?.map(field => field?.name?.toLowerCase())
      .filter(key => key !== undefined);

    setAvailableFeatureAttributes(availableFeatureCollectionAttributes.filter(o => !(currentKeys?.includes(o.toLowerCase()))));
  }, [availableFeatureCollectionAttributes]);

  useEffect(() => {
    if (!map) {
      return;
    }

    const properties = selectedFeature?.getProperties();

    form.setFieldValue('fields', []);

    if (properties) {
      const filteredPropertyEntries = Object.entries(properties)
        .filter(([, value]) => !(value instanceof OlGeometry))
        .map(([key, value]) => [key, value]);
      const filteredProperties = Object.fromEntries(filteredPropertyEntries);

      const formProperties = Object.entries(filteredProperties)
        .map(([key, value]) => {
          return {
            name: key,
            value: value
          };
        });

      form.setFieldValue('fields', formProperties);
    }

    const digitizeLayer = DigitizeUtil.getDigitizeLayer(map);
    const digitizedFeatures = digitizeLayer.getSource()?.getFeatures();

    const featureCollectionAttributes: Set<string> = new Set();
    digitizedFeatures?.forEach(feat => {
      Object.keys(feat.getProperties()).forEach(prop => {
        if (!(feat.get(prop) instanceof OlGeometry)) {
          featureCollectionAttributes.add(prop);
        }
      });
    });
    setAvailableFeatureCollectionAttributes(Array.from(featureCollectionAttributes));
  }, [selectedFeature, form, map]);

  useEffect(() => {
    setSelectedFeature(undefined);
  }, [open]);

  // todo revisit react-geo to make name of the slect-interaction configurable
  const selectInteraction = map?.getInteractions().getArray().filter(interaction => {
    if (interaction.get('active') === true && interaction.get('name') === 'react-geo-select-interaction') {
      return true;
    } else {
      return false;
    }
  })[0] as Select;

  if (selectInteraction) {
    selectInteraction.on('select', () => {
      setSelectedFeature(selectInteraction.getFeatures().getArray()[0]);
    });
  }

  const onFinish = (input: FormData) => {
    if (!selectedFeature) {
      return;
    }
    notification.destroy();
    notification.success({
      message: (t('notificationApplyText.title')),
      placement: 'top',
      duration: 3.5
    });

    for (const property in selectedFeature.getProperties()) {
      if (!(selectedFeature.get(property) instanceof OlGeometry)) {
        selectedFeature.unset(property);
      }
    }

    if (input.fields) {
      Object.values(input.fields).forEach(field => {
        if (!field?.name) {
          return;
        }
        selectedFeature.set(field.name, field.value);
      });
    }
  };

  const remove = (rmFn: any, name: number) => {
    rmFn(name);
  };

  const onChange = async () => {
    try {
      await form.validateFields();
      setIsFormIsValid(true);
    } catch (error) {
      setIsFormIsValid(false);
    }
  };

  const onValuesChange = (changedFields: FormData, fields: FormData) => {
    updateAvailableFeatureAttributes(fields);
  };

  const getFormItems = (fields: FormListFieldData[], rmFn: any) => {
    return fields.map((field) => {
      const removeAndMessage = () => {
        notification.destroy();
        notification.info({
          message: (t('notificationDeleteText.title')),
          description: (t('notificationDeleteText.info')),
          placement: 'top',
          duration: 6
        });
        remove(rmFn, field.name);
      };
      return (
        <div
          key={field.key}
          className='attribute-row'
        >
          <AttributionRow
            keyName={field.name}
            key={field.key}
            onChange={onChange}
            options={availableFeatureAttributes}
          />
          <Popconfirm
            title={t('AttributionPopConfirm.title')}
            okText={t('AttributionPopConfirm.okText')}
            cancelText={t('AttributionPopConfirm.cancelText')}
            placement='topRight'
            onConfirm={removeAndMessage}
          >
            {contextHolder}
            <Button
              className="remove-attribute-button"
              type='primary'
              danger={true}
              icon={
                <FontAwesomeIcon
                  icon={faMinusSquare}
                />
              }
            />
          </Popconfirm>
        </div>
      );
    });
  };

  return (
    <Drawer
      title={t('Attribution.title')}
      className="attribution-drawer"
      placement="right"
      mask={false}
      maskClosable={false}
      closable={false}
      open={open}
      {...passThroughProps}
    >
      {!selectedFeature &&
        <>
          {t('Attribution.select')}
        </>
      }
      <Row>
        <Form
          onFinish={onFinish}
          autoComplete="off"
          form={form}
          onValuesChange={onValuesChange}
        >
          <Form.List
            name="fields"
          >
            {(fields, {
              add,
              remove: rmFn
            }) => (
              <>
                {
                  getFormItems(fields, rmFn)
                }
                <Form.Item>
                  {
                    selectedFeature ?
                      <Button
                        type="dashed"
                        onClick={() => {
                          add();
                        }}
                        className="add-attribute-button"
                        icon={
                          <FontAwesomeIcon
                            icon={faPlus}
                          />
                        }
                      >
                        {t('Attribution.add')}
                      </Button> :
                      <></>
                  }
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button
              className="submit-attributes-button"
              type="primary"
              htmlType="submit"
              disabled={!isFormValid}
              hidden={selectedFeature ? false: true}
            >
              {t('Attribution.submit')}
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Drawer>
  );
};

export default AttributionDrawer;
