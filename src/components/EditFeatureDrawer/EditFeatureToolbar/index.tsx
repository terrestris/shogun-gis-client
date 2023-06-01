import React from 'react';

import {
  FormInstance
} from 'antd';

import {
  Feature
} from 'geojson';

import useAppSelector from '../../../hooks/useAppSelector';

import DeleteButton from '../DeleteButton';
import ResetButton from '../ResetButton';
import SaveButton from '../SaveButton';

import './index.less';

export type EditFeatureToolbarProps = {
  feature: Feature;
  layerId: string;
  form: FormInstance;
  onSaveSuccess?: (responseText?: string) => void;
  onSaveError?: (error: unknown) => void;
  onDeleteSuccess?: () => void;
  onDeleteError?: (error: unknown) => void;
};

export const EditFeatureToolbar: React.FC<EditFeatureToolbarProps> = ({
  feature,
  layerId,
  form,
  onSaveSuccess = () => {},
  onSaveError = () => {},
  onDeleteSuccess = () => {},
  onDeleteError = () => {}
}) => {
  const allowedEditMode = useAppSelector(state => state.editFeature.userEditMode);

  return (
    <div
      className='edit-feature-toolbar'
    >
      {
        allowedEditMode.includes('CREATE') ||
        allowedEditMode.includes('UPDATE') ?
          <>
            <ResetButton
              feature={feature}
              form={form}
            />
            <SaveButton
              form={form}
              layerId={layerId}
              onSuccess={onSaveSuccess}
              onError={onSaveError}
            />
          </>: <></>
      }
      {
        allowedEditMode.includes('DELETE') &&
        <DeleteButton
          feature={feature}
          layerId={layerId}
          onSuccess={onDeleteSuccess}
          onError={onDeleteError}
        />
      }
    </div>
  );
};

export default EditFeatureToolbar;
