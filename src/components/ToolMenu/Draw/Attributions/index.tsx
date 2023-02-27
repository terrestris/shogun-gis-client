import React, { useState } from 'react';

import {
  MinusCircleOutlined, PlusOutlined
} from '@ant-design/icons';
import {
  Button, Drawer, Form, Input, Space, Divider, List, Row, Typography
} from 'antd';
import OlFeature from 'ol/Feature';
import OlLayerVector from 'ol/layer/Vector';

import VectorSource from 'ol/source/Vector';

import Geometry from 'ol/geom/Geometry.js';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';
import useAppSelector from '../../../../hooks/useAppSelector';

export type AttributionDrawerProps = {
  openAttributeDrawer: boolean;
  onClose: (open: boolean) => void;
};

const AttributionDrawer: React.FC<AttributionDrawerProps> = ({
  openAttributeDrawer,
  onClose
}) => {

  const [attributions, setAttributions] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();


  // ToDo: will be used in future once react-geo library triggeres selected events
  // const selectedFeatures: OlFeature[] = useAppSelector(state => state.selectedFeatures);

  const map = useMap();

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

  const onFinish = (values: any) => {
    // set input as property
    let key = (`${values.attributions[0].first}`);
    let value = (`${values.attributions[0].last}`);

    selectedFeature?.setProperties({
      [key]: value
    });
    console.log(selectedFeature?.getProperties());

  };

  // List all Properties of the selected layer as []
  if (selectedFeature) {
    let allProperties = Object.entries(selectedFeature?.getProperties());
    let geometryType = selectedFeature?.getGeometry()?.getType();
    console.log(allProperties);
    // console.log(geometryType === 'Circle');
    // console.log(allProperties.indexOf('geometry'))
  }

  // set new Properties


  return (
    <>
      <Drawer
        title="Basic Drawer"
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
              Please select a feature
            </>
          }
        </>
        {/* <Row>
          <List
            bordered
            dataSource={attributions}
            renderItem={(item: string) => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </Row> */}
        <Divider />
        <Row>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            autoComplete="off"
          >
            <Form.List name="attributions">
              {(fields, {
                add, remove
              }) => (
                <>
                  {fields.map(({
                    key, name, ...restField
                  }) => (
                    // <Space key={key}
                    //   style={{
                    //     display: 'flex',
                    //     marginBottom: 8
                    //   }}
                    //   align="baseline"
                    // >

                    <>
                      {/* {selectedFeature && selectedFeature.getProperties().map(() => {
                        debugger
                        return ( */}
                      <div
                        key={key}
                        className='attribute-row'
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'first']}
                          rules={[{
                            required: true,
                            message: 'Missing Key'
                          }]}
                        >
                          <Input placeholder="Key" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'last']}
                          rules={[{
                            required: true,
                            message: 'Missing Value'
                          }]}
                        >
                          <Input placeholder="Value" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </div>
                      {/* )
                      })} */}
                    </>
                    // </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Attribution
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Drawer>
    </>
  );
};

export default AttributionDrawer;
