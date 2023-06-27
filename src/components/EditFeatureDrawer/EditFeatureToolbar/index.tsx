import React from 'react';

import {
  FormInstance
} from 'antd';

import OlFeature from 'ol/Feature';

import {
  WmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import useAppSelector from '../../../hooks/useAppSelector';

import DeleteButton from '../DeleteButton';
import ResetButton from '../ResetButton';
import SaveButton from '../SaveButton';

import './index.less';

export type EditFeatureToolbarProps = {
  layer: WmsLayer;
  editFeature: OlFeature;
  form: FormInstance;
  onSaveSuccess?: (responseText?: string) => void;
  onSaveError?: (error: unknown) => void;
  onDeleteSuccess?: () => void;
  onDeleteError?: (error: unknown) => void;
};

export const EditFeatureToolbar: React.FC<EditFeatureToolbarProps> = ({
  layer,
  editFeature,
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
              editFeature={editFeature}
              form={form}
            />
            <SaveButton
              editFeature={editFeature}
              form={form}
              layer={layer}
              onSuccess={onSaveSuccess}
              onError={onSaveError}
            />
          </>: <></>
      }
      {
        allowedEditMode.includes('DELETE') &&
        <DeleteButton
          editFeature={editFeature}
          layer={layer}
          onSuccess={onDeleteSuccess}
          onError={onDeleteError}
        />
      }
    </div>
  );
};

export default EditFeatureToolbar;
