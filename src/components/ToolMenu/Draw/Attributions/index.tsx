import React, {
  useEffect, useState
} from 'react';

import {
  MinusCircleOutlined, PlusOutlined
} from '@ant-design/icons';
import {
  Button, Drawer, Form, Divider, Row
} from 'antd';
import _cloneDeep from 'lodash/cloneDeep';
import OlFeature from 'ol/Feature';

import { useTranslation } from 'react-i18next';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';
import AttributionRow from './AttributionRow';
import Geometry from 'ol/geom/Geometry';

export type AttributionDrawerProps = {
  openAttributeDrawer: boolean;
  onClose: (open: boolean) => void;
};

const AttributionDrawer: React.FC<AttributionDrawerProps> = ({
  openAttributeDrawer,
  onClose
}) => {
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();
  const [render, setRender] = useState<boolean>(true);
  const [isFormValid, setIsFormIsValid] = useState(true);
  const [currentProperties, setCurrentProperties] = useState<any>({});

  const [form] = Form.useForm();

  // ToDo: will be used in future once react-geo library triggeres selected events
  // const selectedFeatures: OlFeature[] = useAppSelector(state => state.selectedFeatures);

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

  // ToDo: will be removed in future once react-geo library triggeres selected events
  const selectInteraction: any = map?.getInteractions().getArray().filter(interaction => {
    if (interaction.get('active') === true && interaction.get('name') === 'react-geo-select-interaction') {
      return true;
    } else {
      return false;
    }
  })[0];

  if (selectInteraction) {
    selectInteraction.on('select', () => {
      setSelectedFeature(selectInteraction.getFeatures().getArray()[0]);
    });
  }

  const handleClose = () => {
    onClose(false);
  };

  const onFinish = (input: any) => {
    if (!selectedFeature) {
      return;
    }

    Object.entries(input.fields).forEach(([key, value]) => {
      // @ts-ignore
      selectedFeature.set(value.name, value.value);
    });
  };

  const onPropertyAdd = () => {
    const newProps = { ...currentProperties };
    newProps[''] = '';
    setCurrentProperties(newProps);
  };

  const remove = (keyToRemove: string) => {
    const existingFields = form.getFieldValue('fields');

    delete existingFields[keyToRemove];

    form.setFieldsValue({
      fields: existingFields
    });

    setRender(!render);
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
        open={openAttributeDrawer}
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
