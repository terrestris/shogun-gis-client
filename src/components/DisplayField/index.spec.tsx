import React from 'react';

import {
  prettyDOM,
  render,
  screen
} from '@testing-library/react';

import moment from 'moment';

import { createReduxWrapper } from '../../utils/testUtils';

import DisplayField from '.';

describe('<DisplayField />', () => {

  it('is defined', () => {
    expect(DisplayField).toBeDefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <DisplayField />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
    const fieldElem = container.querySelector('.displayfield');
    expect(fieldElem).toBeVisible();
  });

  it('string is displayed correctly', () => {
    const {
      container
    } = render(
      <DisplayField
        value={'display-text'}
      />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
    const textElem = screen.getByText('display-text');
    expect(textElem).toBeVisible();
  });

  it('boolean is displayed correctly', () => {
    const {
      container
    } = render(
      <DisplayField
        value={true}
      />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
    const checkboxElem = container.querySelector('[type="checkbox"]');
    expect(checkboxElem).toBeVisible();
    expect(checkboxElem).toHaveAttribute('checked');
  });

  it('date is displayed correctly', () => {
    const now = moment('01-01-2024');
    const format = 'DD.MM.YYYY';

    render(
      <DisplayField
        format={format}
        value={now}
      />,
      {
        wrapper: createReduxWrapper()
      });

    const date = now.format(format);
    const dateElem = screen.getByText(date);
    expect(dateElem).toBeVisible();
  });

  it('array is displayed correctly', () => {
    render(
      <DisplayField
        value={['display-text1', 'display-text2']}
      />,
      {
        wrapper: createReduxWrapper()
      });

    const tableElem = screen.queryAllByText('ReferenceTable.defaultRowPlaceholder');
    expect(tableElem).toHaveLength(2);
    expect(tableElem[0]).toBeVisible();
  });

});
