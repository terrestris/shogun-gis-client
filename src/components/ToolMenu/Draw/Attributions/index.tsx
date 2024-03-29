import React, {
  useEffect, useState
} from 'react';

import {
  MinusCircleOutlined, PlusOutlined
} from '@ant-design/icons';
import {
  Button, Drawer, DrawerProps, Form, Row
} from 'antd';
import _cloneDeep from 'lodash/cloneDeep';
import OlFeature from 'ol/Feature';
import Select from 'ol/interaction/Select';

import { useTranslation } from 'react-i18next';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';
import AttributionRow, { InputFields } from './AttributionRow';

export interface AttributionDrawerProps extends DrawerProps {
  onCustomClose?: (open: boolean) => void;
}

const AttributionDrawer: React.FC<AttributionDrawerProps> = ({
  onCustomClose,
  onClose,
  ...passThroughProps
}) => {
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();
  const [isFormValid, setIsFormIsValid] = useState(true);
  const [currentProperties, setCurrentProperties] = useState<Record<string, any>>({});

  const [form] = Form.useForm();

  const map = useMap();

  const {
    t
  } = useTranslation();

  useEffect(() => {
    const properties = selectedFeature?.getProperties();

    setCurrentProperties({ ...properties });

    const fs: any = {};
    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        fs[key] = {
          name: key,
          value: value
        };
      });
    }

    form.setFieldValue('fields', {});
    form.setFieldsValue({
      fields: fs
    });
  }, [selectedFeature, form]);

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

  const handleClose = () => {
    if (onCustomClose) {
      onCustomClose(false);
    }
  };

  const onFinish = (input: InputFields) => {
    if (!selectedFeature) {
      return;
    }

    if (Object.keys(currentProperties).length > 0) {
      Object.entries(input.fields).forEach(([key, value]) => {
        selectedFeature.set(value.name, value.value);
      });
    } else {
      selectedFeature.set('', '');
    }
  };

  const onPropertyAdd = () => {
    const newProps = {...currentProperties};
    newProps[''] = '';
    setCurrentProperties(newProps);
  };

  const remove = (keyToRemove: string) => {
    const updatedProperties = {...currentProperties};

    delete updatedProperties[keyToRemove];

    selectedFeature?.unset(keyToRemove);

    setCurrentProperties(updatedProperties);
  };

  const onKeyChange = async () => {
    try {
      await form.validateFields();
      setIsFormIsValid(true);
    } catch (error) {
      setIsFormIsValid(false);
    }
  };

  const getFormItems = () => {
    const filteredProperties = currentProperties;

    if (filteredProperties.geometry) {
      delete filteredProperties.geometry;
    }

    return Object.entries(filteredProperties).map(([key, value]) => {
      return (
        <div
          key={key}
          className='attribute-row'
        >
          <AttributionRow
            keyName={key}
            key={key}
            onChange={onKeyChange}
          />
          <MinusCircleOutlined
            onClick={() => remove(key)}
          />
        </div>
      );
    });
  };

  return (
    <>
      <Drawer
        title={t('Attribution.title')}
        className='attribution-drawer'
        placement="right"
        mask={false}
        maskClosable={false}
        onClose={handleClose}
        {...passThroughProps}
      >
        <>
          {!selectedFeature &&
            <>
              {t('Attribution.select')}
            </>
          }
        </>
        <Row>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            autoComplete="off"
            form={form}
          >
            {
              getFormItems()
            }
            <Form.Item>
              {selectedFeature ?
                <Button
                  type="dashed"
                  onClick={onPropertyAdd}
                  block
                  icon={<PlusOutlined />}
                >
                  {t('Attribution.add')}
                </Button> :
                <></>}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!isFormValid}
              >
                {t('Attribution.submit')}
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Drawer>
    </>
  );
};

export default AttributionDrawer;
