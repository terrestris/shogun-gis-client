import React from 'react';

import {
  MinusCircleOutlined, PlusOutlined
} from '@ant-design/icons';
import {
  Button, Drawer, Form, Input, Space, Divider, List, Row, Typography
} from 'antd';
import OlLayerVector from 'ol/layer/Vector';

import VectorSource from 'ol/source/Vector';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';

export type AttributionDrawerProps = {
  openAttributeDrawer: boolean;
  onClose: (open: boolean) => void;
};

const AttributionDrawer: React.FC<AttributionDrawerProps> = ({
  openAttributeDrawer,
  onClose
}) => {

  const map = useMap();

  const handleClose = () => {
    onClose(false);
  };

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  // Get the created Layer
  // let drawVectorLayer = MapUtil.getLayerByName(map!, 'react-geo_digitize') as OlLayerVector<VectorSource>;
  // let features = drawVectorLayer.getSource()?.getFeatures();




  // method to call
  // features[0].set()

  let attributions = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

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
        <Row>
          <List
            bordered
            dataSource={attributions}
            renderItem={(item) => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </Row>
        <Divider />
        <Row>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            autoComplete="off"
          >
            <Form.List name="users">
              {(fields, {
                add, remove
              }) => (
                <>
                  {fields.map(({
                    key, name, ...restField
                  }) => (
                    <Space key={key}
                      style={{
                        display: 'flex',
                        marginBottom: 8
                      }}
                      align="baseline"
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
                    </Space>
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
