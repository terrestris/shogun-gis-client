import React, {
  useState
} from 'react';

import {
  faEdit,
  faTrash,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Modal,
  Popconfirm,
  Table
} from 'antd';

import {
  FormInstance,
  useForm
} from 'antd/lib/form/Form';

import {
  ColumnsType,
  TableProps
} from 'antd/lib/table';

import { FileInfoList } from 'hooks/useWriteWfsTransaction';

import _cloneDeep from 'lodash/cloneDeep';

import moment from 'moment';

import OlFeature from 'ol/Feature';
import {
  getUid
} from 'ol/util';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  PropertyFormItemEditConfig
} from '@terrestris/shogun-util/dist/model/Layer';

import useConvertImageUrl from '../../../hooks/useConvertImageUrl';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import EditFeatureForm from '../../EditFeatureDrawer/EditFeatureForm';

import './index.less';

export type EditReferenceDataType = {
  id?: number;
  internalId?: number;
  [key: string]: any;
};

export type EditReferenceTableProps = Omit<TableProps<EditReferenceDataType>, 'onChange'> & {
  parentForm: FormInstance<EditReferenceDataType>;
  propertyName: string;
  value?: EditReferenceDataType;
  tablePropertyName?: string;
  formConfig?: PropertyFormItemEditConfig[];
  onChange?: (changedValues: EditReferenceDataType[]) => void;
};

export const EditReferenceTable: React.FC<EditReferenceTableProps> = ({
  parentForm,
  propertyName,
  value,
  tablePropertyName,
  formConfig,
  onChange = () => {},
  ...passThroughProps
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();

  const [form] = useForm<EditReferenceDataType>();

  const {
    t
  } = useTranslation();

  const imageUrlToBase64 = useConvertImageUrl();
  const client = useSHOGunAPIClient();

  const defaultPropertyName = 'id';

  const resolvePlaceholder = (record: EditReferenceDataType): string | number => {
    if (!tablePropertyName) {
      return record[defaultPropertyName] ?? '';
    }

    const regex = /{{(.*?)}}/g;

    if (!tablePropertyName.match(regex)) {
      return record[tablePropertyName];
    }

    let resolved = tablePropertyName;
    let match;

    // eslint-disable-next-line no-cond-assign
    while (match = regex.exec(tablePropertyName)) {
      resolved = resolved.replace(match[0], record[match[1]]);
    }

    return resolved;
  };

  const columns: ColumnsType<EditReferenceDataType> = [{
    width: '100%',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => {
      const valA = resolvePlaceholder(a);
      const valB = resolvePlaceholder(b);

      if (Number.isFinite(valA) && Number.isFinite(valB)) {
        return (valA as number) - (valB as number);
      }

      if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.localeCompare(valB);
      }

      return 0;
    },
    render: (_: any, record: EditReferenceDataType) => resolvePlaceholder(record)
  }, {
    render: (_: any, record: EditReferenceDataType) => {
      return (
        <Button
          onClick={() => onDetailsClick(record)}
          icon={(
            <FontAwesomeIcon
              icon={faEdit}
            />
          )}
        />
      );
    }
  }, {
    render: (_: any, record: EditReferenceDataType) => {
      return (
        <Popconfirm
          title={t('EditReferenceTable.confirmDeleteTitle')}
          onConfirm={() => onConfirmDelete(record)}
          placement="bottomRight"
        >
          <Button
            danger={true}
            icon={(
              <FontAwesomeIcon
                icon={faTrash}
              />
            )}
          />
        </Popconfirm>
      );
    }
  }];

  const getDataSource = () => {
    if (!value) {
      return;
    }

    if (!Array.isArray(value)) {
      Logger.warn('Reference value must be of of type array.');
      return;
    }

    const valueCopy = _cloneDeep(value);
    valueCopy.forEach(v => {
      Object.entries(v).forEach(async ([key, val]) => {
        const isDate = formConfig?.some(cfg => cfg.propertyName === key && cfg.component === 'DATE');
        if (isDate && val) {
          const parsedDate = moment(value);

          if (parsedDate.isValid()) {
            v[key] = moment(val);
          } else {
            Logger.warn('Could not parse date');
            v[key] = null;
          }
        }

        const isUpload = formConfig?.some(cfg => cfg.propertyName === key && cfg.component === 'UPLOAD');
        if (isUpload) {
          if (Array.isArray(v[key])) {
            const vMap = v[key]?.map(async (upload: FileInfoList) => ({
              ...upload,
              thumbUrl: upload.type.startsWith('image')
                ? await imageUrlToBase64(
                  `${client?.getBasePath()}imagefiles/${
                    upload?.response?.fileUuid
                  }/thumbnail`
                )
                : undefined,
              url: upload.type.startsWith('image') ? undefined : upload.url
            }));
            const result = await Promise.all(vMap);
            v[key] = result;
          } else {
            v[key] = [];
          }
        }
      });
    });

    const isIdAvailable = valueCopy.every(el => {
      if (Number.isFinite(el.id)) {
        return true;
      }

      if (typeof el.id === 'string' && el.id.length > 0) {
        return true;
      }

      return false;
    });

    if (!isIdAvailable) {
      Logger.warn('Not all elements in the referenced array contain an id value. ' +
        'This might result in unexpected behaviour');
    }

    return valueCopy;
  };

  const onAddClick = () => {
    const feature = new OlFeature();
    // We need to set a temporarily internal id on the feature to have it
    // detectable while it's not being saved and has no id property set.
    feature.set('internalId', getUid(feature));

    form.setFieldsValue(feature.getProperties());

    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const onConfirmDelete = (record: EditReferenceDataType) => {
    const parentFormValues = parentForm.getFieldsValue();

    if (!parentFormValues[propertyName]) {
      Logger.warn(`Could not find the property ${propertyName} in the form values`);
      return;
    }

    const deleteCandidates = _cloneDeep(parentFormValues[propertyName]);

    if (!Array.isArray(deleteCandidates)) {
      Logger.warn('The delete candidate is not of required type array');
      return;
    }

    const deleteIdx = deleteCandidates.findIndex(deleteCandidate => {
      if (Number.isFinite(deleteCandidate.id) && (deleteCandidate.id === record.id)) {
        return true;
      }

      if (deleteCandidate.internalId && (deleteCandidate.internalId === record.internalId)) {
        return true;
      }

      return false;
    });

    if (deleteIdx === -1) {
      Logger.warn(`Could not find the index (${record.id}) to delete`);
      return;
    }

    deleteCandidates.splice(deleteIdx, 1);

    onChange(deleteCandidates);
  };

  const onDetailsClick = (record: EditReferenceDataType) => {
    const feature = new OlFeature();
    feature.setProperties(record);

    form.setFieldsValue(feature.getProperties());

    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const updateReferences = () => {
    const formValues = _cloneDeep<EditReferenceDataType>(form.getFieldsValue(true));

    let existingReferences: EditReferenceDataType[] = [];
    if (Array.isArray(parentForm.getFieldValue(propertyName))) {
      existingReferences = _cloneDeep(parentForm.getFieldValue(propertyName));
    }

    const targetIdx = existingReferences.findIndex(existingReference => {
      if (Number.isFinite(existingReference.id) && (existingReference.id === formValues.id)) {
        return true;
      }

      if (existingReference.internalId && (existingReference.internalId === formValues.internalId)) {
        return true;
      }

      return false;
    });

    if (targetIdx > -1) {
      // Update
      existingReferences[targetIdx] = formValues;
    } else {
      // Add
      existingReferences.push(formValues);
    }

    if (form.isFieldsTouched()) {
      onChange(existingReferences);
    }
  };

  const onCancel = () => {
    closeModal();
  };

  const onOk = async () => {
    try {
      await form.validateFields();
    } catch (error) {
      Logger.warn('Form validation failed: ', error);
      return;
    }

    updateReferences();

    closeModal();
  };

  const closeModal = () => {
    form.resetFields();

    setIsModalOpen(false);
    setSelectedFeature(undefined);
  };

  return (
    <>
      <Button
        className="add-reference-button"
        onClick={onAddClick}
        icon={(
          <FontAwesomeIcon
            icon={faPlus}
          />
        )}
      />
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
        className="edit-reference-table-modal"
        open={isModalOpen}
        maskClosable={false}
        width={600}
        destroyOnClose={true}
        title={`${t('EditReferenceTable.modalTitle', {
          referenceValue: selectedFeature ?
            resolvePlaceholder(selectedFeature.getProperties() as EditReferenceDataType) :
            undefined
        })}`}
        onCancel={onCancel}
        onOk={onOk}
      >
        {selectedFeature && (
          <EditFeatureForm
            form={form}
            formConfig={formConfig}
            applyFormDirty={false}
          />
        )}
      </Modal>
    </>
  );
};

export default EditReferenceTable;
