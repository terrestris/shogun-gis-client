import React, {
  useState
} from 'react';

import {
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Modal,
  Table
} from 'antd';

import {
  TableProps
} from 'antd/lib/table';

import OlFeature from 'ol/Feature';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  ReferenceConfig
} from '../DisplayField';

import FeatureInfoForm from '../ToolMenu/FeatureInfo/FeatureInfoForm';

import './index.less';

export type ReferenceDataType = Record<string, any>;

export type ReferenceTableProps = TableProps<ReferenceDataType> & {
  value?: string;
  referenceConfig?: ReferenceConfig;
};

export const ReferenceTable: React.FC<ReferenceTableProps> = ({
  value,
  referenceConfig,
  ...passThroughProps
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();

  const {
    t
  } = useTranslation();

  const defaultPropertyName = 'id';

  const resolvePlaceholder = (record: ReferenceDataType) => {
    if (referenceConfig?.tablePropertyName) {
      const regex = /{{([^}]*)}}/g;

      if (referenceConfig?.tablePropertyName.match(regex)) {
        let resolved = referenceConfig?.tablePropertyName;
        let match;

        // eslint-disable-next-line no-cond-assign
        while (match = regex.exec(referenceConfig?.tablePropertyName)) {
          resolved = resolved.replace(match[0], record[match[1]]);
        }

        return resolved;
      }

      return record[referenceConfig?.tablePropertyName];
    }

    if (record[defaultPropertyName]) {
      return record[defaultPropertyName];
    }
  };

  const columns = [{
    width: '100%',
    render: (val: any, record: ReferenceDataType) => resolvePlaceholder(record) ?
      resolvePlaceholder(record) :
      t('ReferenceTable.defaultRowPlaceholder')
  }, {
    render: (val: any, record: ReferenceDataType) => {
      return (
        <Button
          onClick={() => onDetailsClick(val, record)}
          icon={(
            <FontAwesomeIcon
              icon={faBoxOpen}
            />
          )}
        />
      );
    }
  }];

  const getDataSource = () => {
    if (!value) {
      return [];
    }

    try {
      const parsedValue = JSON.parse(value);

      if (Array.isArray(parsedValue)) {
        return parsedValue;
      }

      if (parsedValue === null || parsedValue === undefined || typeof parsedValue === 'number' ||
        typeof parsedValue === 'boolean' || typeof parsedValue === 'string') {
        Logger.warn('Unsupported value given');
        return [];
      }

      if (typeof parsedValue === 'object') {
        return [parsedValue];
      }
    } catch (error) {
      Logger.warn('Error while parsing the table data ', error);
      return [];
    }
  };

  const getModalTitle = () => {
    if (!selectedFeature) {
      return t('ReferenceTable.defaultModalTitle');
    }

    const placeholder = resolvePlaceholder(selectedFeature.getProperties());

    if (!placeholder) {
      return t('ReferenceTable.defaultModalTitle');
    }

    return `${t('ReferenceTable.modalTitle', {
      referenceValue: placeholder
    })}`;
  };

  const onDetailsClick = (val: any, record: ReferenceDataType) => {
    const feature = new OlFeature();
    feature.setProperties(record);

    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const onCancel = async () => {
    setIsModalOpen(false);
    setSelectedFeature(undefined);
  };

  return (
    <>
      <Table
        size="small"
        showHeader={false}
        pagination={false}
        columns={columns}
        rowKey={defaultPropertyName}
        dataSource={getDataSource()}
        {...passThroughProps}
      />
      <Modal
        className="reference-table-modal"
        open={isModalOpen}
        maskClosable={false}
        footer={null}
        width={600}
        destroyOnClose={true}
        title={getModalTitle()}
        onCancel={onCancel}
      >
        {selectedFeature && (
          <FeatureInfoForm
            feature={selectedFeature}
            formConfig={referenceConfig?.featureInfoFormConfig}
          />
        )}
      </Modal>
    </>
  );
};

export default ReferenceTable;
