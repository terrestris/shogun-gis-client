import React from 'react';

import {
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';

import { Form } from 'antd';

import { PropertyFormItemEditConfig } from '@terrestris/shogun-util/dist/model/Layer';

import { setFormDirty } from '../../../store/editFeature';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditFeatureForm, {
  EditFeatureFormProps
} from '.';

jest.mock('../../../hooks/useAppDispatch', () => () => jest.fn());
jest.mock('../../../hooks/useAppSelector', () => jest.fn(() => false));
jest.mock('../../../hooks/useSHOGunAPIClient', () => jest.fn(() => ({})));
jest.mock('../../../store/editFeature', () => ({
  setFormDirty: jest.fn()
}));
jest.mock('../../DisplayField', () => {
  const DisplayField = () => <div data-testid="display-field" />;
  DisplayField.displayName = 'DisplayField';
  return DisplayField;
});

jest.mock('../../FileUpload', () => {
  const FileUpload = () => <div data-testid="file-upload" />;
  FileUpload.displayName = 'FileUpload';
  return FileUpload;
});

jest.mock('../../ImageUpload', () => {
  const ImageUpload = () => <div data-testid="image-upload" />;
  ImageUpload.displayName = 'ImageUpload';
  return ImageUpload;
});

jest.mock('../EditReferenceTable', () => {
  const EditReferenceTable = () => <div data-testid="edit-reference-table" />;
  EditReferenceTable.displayName = 'EditReferenceTable';
  return EditReferenceTable;
});

describe('<EditFeatureForm />', () => {
  const EditFeatureFormWrapper = (props: Omit<EditFeatureFormProps, 'form'>) => {
    const [form] = Form.useForm();

    return (
      <EditFeatureForm
        {...props}
        form={form}
      />
    );
  };

  const formConfig: PropertyFormItemEditConfig[] = [
    {
      propertyName: 'inputField',
      displayName: 'Input Field',
      component: 'INPUT',
      required: true
    },
    {
      propertyName: 'selectField',
      displayName: 'Select Field',
      component: 'SELECT'
    },
    {
      propertyName: 'checkboxField',
      displayName: 'Checkbox Field',
      component: 'CHECKBOX'
    },
    {
      propertyName: 'uploadField',
      displayName: 'Upload Field',
      component: 'UPLOAD',
      fieldProps: { type: 'FILE' }
    },
    {
      propertyName: 'imageUploadField',
      displayName: 'Image Upload Field',
      component: 'UPLOAD',
      fieldProps: { type: 'IMAGE' }
    }
  ];

  it('is defined', () => {
    expect(EditFeatureForm).toBeDefined();
  });

  it('can be rendered with form', () => {
    const {
      container
    } = render(
      <EditFeatureFormWrapper
        formConfig={formConfig}
      />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
    const formElem = container.querySelector('.edit-feature-form');
    expect(formElem).toBeVisible();

    expect(screen.getByLabelText('Input Field')).toBeInTheDocument();
    expect(screen.getByLabelText('Select Field')).toBeInTheDocument();
    expect(screen.getByLabelText('Checkbox Field')).toBeInTheDocument();
    expect(screen.getByTestId('file-upload')).toBeInTheDocument();
    expect(screen.getByTestId('image-upload')).toBeInTheDocument();
  });

  it('marks the form as dirty when values change', async () => {
    render(
      <EditFeatureFormWrapper
        formConfig={formConfig}
      />,
      {
        wrapper: createReduxWrapper()
      });

    const inputField = screen.getByLabelText('Input Field');
    await fireEvent.change(inputField, { target: { value: 'new value' } });

    await waitFor(() => {
      expect(setFormDirty).toHaveBeenCalledWith(true);
    });
  });
});
