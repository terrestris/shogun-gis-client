import React from 'react';

import {
  cleanup,
  render
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import ReferenceTable from './index';

describe('<ReferenceTable />', () => {
  let modalElem: HTMLElement | null;
  let tableElem: HTMLInputElement | null;

  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    const {
      container
    } = render(
      <ReferenceTable
        value={''}
      />,
      {
        wrapper: createReduxWrapper()
      });

    modalElem = container;
    tableElem = container.querySelector('.ant-table-wrapper');
  });

  it('is defined', () => {
    expect(ReferenceTable).not.toBeUndefined();
  });

  it('can be rendered', () => {
    expect(modalElem).toBeVisible();
    expect(tableElem).toBeVisible();
  });
});
