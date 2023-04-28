import React from 'react';

import {
  Select,
  SelectProps
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

export interface PermissionSelectProps extends SelectProps {};

const PermissionSelect: React.FC<PermissionSelectProps> = ({
  ...passThroughProps
}) => {

  const { t } = useTranslation();

  return (
    <Select
      className="permission-select"
      placeholder={t('PermissionSelect.placeholder')}
      options={[{
        label: t('PermissionSelect.readLabel'),
        value: 'READ'
      }, {
        label: t('PermissionSelect.readUpdateLabel'),
        value: 'READ_UPDATE'
      }, {
        label: t('PermissionSelect.readUpdateDeleteLabel'),
        value: 'READ_UPDATE_DELETE'
      }, {
        label: t('PermissionSelect.adminLabel'),
        value: 'ADMIN'
      }]}
      {...passThroughProps}
    />
  );
};

export default PermissionSelect;
