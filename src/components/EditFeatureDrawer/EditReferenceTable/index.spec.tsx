import React from 'react';

import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react';

import { Form } from 'antd';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditReferenceTable, {
  EditReferenceTableProps
} from '.';

let tableElem: HTMLElement | null;

describe('<EditReferenceTable />', () => {
  const EditReferenceTableWrapper = (props: Omit<EditReferenceTableProps, 'parentForm'>) => {
    const [form] = Form.useForm();

    return (
      <EditReferenceTable
        {...props}
        parentForm={form}
      />
    );
  };

  it('is defined', () => {
    expect(EditReferenceTable).toBeDefined();
  });

  beforeEach(() => {
    const { container } =
      render(
        <EditReferenceTableWrapper
          propertyName={'test'}
        />,
        {
          wrapper: createReduxWrapper()
        });
    tableElem = container;
  });

  it('can be rendered', () => {
    expect(tableElem).toBeVisible();
  });

  it('add modal can be opened', async () => {
    const buttonElem: HTMLElement | null = document.querySelector('.add-reference-button');
    expect(buttonElem).toBeVisible();

    await waitFor(() => {
      fireEvent.click(buttonElem!);
    });
    const modalElem: HTMLElement | null = document.querySelector('.edit-reference-table-modal');

    await waitFor(() => expect(modalElem).toBeVisible());
  });
});
