import React from 'react';

import {
  fireEvent,
  render,
  waitFor
} from '@testing-library/react';

import { FormInstance } from 'antd/lib';

import { createReduxWrapper } from '../../../utils/testUtils';

import EditReferenceTable, {
  EditReferenceDataType
} from '.';

let tableElem: HTMLElement | null;
let mockParentForm: FormInstance<EditReferenceDataType>;

describe('<EditReferenceTable />', () => {
  it('is defined', () => {
    expect(EditReferenceTable).toBeDefined();
  });

  beforeEach(() => {
    const { container } =
      render(
        <EditReferenceTable
          parentForm={mockParentForm}
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
