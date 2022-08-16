import React, {
  useState
} from 'react';

import {
  BarcodeOutlined
} from '@ant-design/icons';
import {
  Button, Input, Modal, Table, Tabs
} from 'antd';

import Logger from 'js-logger';
import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';

import './index.less';

type TableData = {
  name: string;
  value: string;
};

interface DefaultNDVIButtonProps {

}

export interface MeasureProps extends Partial<DefaultNDVIButtonProps> { }

export const NDVIButton: React.FC<MeasureProps> = ({}): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TableData[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [sceneId, setSceneId] = useState('');

  const {
    t
  } = useTranslation();

  const map = useMap();

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClick = async () => {
    setLoading(true);

    try {
      const unlockResponse = await fetch('/actinia/api/v3/locations/loc_4326/mapsets/NDVI/lock', {
        headers: {
          'Authorization': 'Basic ' + window.btoa('actinia-gdi:actinia_gdi')
        },
        method: 'DELETE'
      });

      if (!unlockResponse.ok) {
        throw new Error('Could not unlock location');
      }

      const unlockResponseJson = await unlockResponse.json();

      if (unlockResponseJson.status !== 'finished') {
        throw new Error('Could not unlock location');
      }
    } catch (error) {
      throw new Error('Could not unlock location');
    }

    const response = await fetch('/actinia/api/v3/locations/loc_4326/mapsets/NDVI/processing', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + window.btoa('actinia-gdi:actinia_gdi')
      },
      method: 'POST',
      body: JSON.stringify({
        'list': [{
          'id': 'ndvi_sene_id1',
          'module': 'ndvi_scene_id',
          'inputs': [{
            'param': 'scene_id',
            'value': sceneId
            // "value": "S2B_MSIL2A_20220810T103629_N0400_R008_T31UGS_20220810T121256"
          },
          {
            'param': 'actinia_url',
            'value': '/actinia/api/v3'
          },
          {
            'param': 'location',
            'value': 'loc_4326'
          },
          {
            'param': 'mapset',
            'value': 'NDVI'
          }
          ]
        }],
        'version': '1'
      }
      )
    } );

    if (!response.ok) {
      setLoading(false);
      return;
    }

    try {
      let responseJson = await response.json();
      let resourceId = responseJson.resource_id;

      let poll = window.setInterval(async function (){
        const responseStatus = await fetch('/actinia/api/v3/resources/actinia-gdi/'+resourceId, {
          headers: {
            'Authorization': 'Basic ' + window.btoa('actinia-gdi:actinia_gdi')
          }
        });

        if (!responseStatus.ok) {
          clearInterval(poll);
          setLoading(false);
          return;
        }

        let statusProcessChain = await responseStatus.json();
        // if (statusProcessChain.status === 'finished') {
        clearInterval(poll);
        setLoading(false);

        const dummyData = [
          'n=132413716',
          'null_cells=13013058',
          'cells=145426774',
          'min=-0.665860712528229',
          'max=0.821830034255981',
          'range=1.48769074678421',
          'mean=0.357870131083626',
          'mean_of_abs=0.358278406990355',
          'stddev=0.1746969802015',
          'variance=0.0305190348915232',
          'coeff_var=48.8157476771027',
          'sum=47386913.9021901'
        ];

        const dataToDisplay = dummyData.map((rasterStatistic: string) => {
          const splitValues = rasterStatistic.split('=');
          const sanitizedData: TableData = {
            name: splitValues[0],
            value: splitValues[1]
          };
          return sanitizedData;
        });

        setData(dataToDisplay);
        setImageUrl('/actinia/api/v3/locations/loc_4326/mapsets/NDVI/raster_layers/NDVI/render');
        setIsModalVisible(true);
        // }
      }, 30000);
    } catch (error) {
      setLoading(false);
      Logger.error(error);
    }
  };

  if (!map) {
    return <></>;
  }

  const columns = [{
    title: 'Statistic',
    key: 'name',
    dataIndex: 'name'
  }, {
    title: 'Value',
    key: 'value',
    dataIndex: 'value'
  }];

  const onSceneIdChange = (evt: any) => {
    setSceneId(evt.target.value);
  };

  return (
    <>
      <Input
        placeholder="Please enter the Scene ID"
        prefix={<BarcodeOutlined />}
        onChange={onSceneIdChange}
        value={sceneId}
      />
      <Button
        type="primary"
        loading={loading}
        onClick={onClick}
        className="NDVIButton"
        disabled={!sceneId}
      >
        {t('NDVI.title')}
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        width={840}
        onCancel={handleCancel}
      >
        <Tabs
          defaultActiveKey="1"
        >
          <Tabs.TabPane
            tab="Statistics"
            key="1"
          >
            <Table
              dataSource={data}
              columns={columns}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Preview"
            key="2"
          >
            <img
              src={imageUrl}
            />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default NDVIButton;
