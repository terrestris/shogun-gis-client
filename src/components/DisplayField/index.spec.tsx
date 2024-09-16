import React from 'react';

import {
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

  it('renders urls as links', () => {
    const linkValues = [
      'http://example.com',
      'https://example.com',
      'http://localhost:8080',
      'ftp://example.com',
      'mailto:silke@shogun.pl'
    ];

    for (const linkValue of linkValues) {
      render(<DisplayField value={linkValue} />);
      const links = screen.getAllByRole('link', { name: 'Link' });

      const link = links.find(l => l.getAttribute('href') === linkValue);

      expect(link).toBeInstanceOf(HTMLAnchorElement);
      expect(link).toHaveAttribute('href', linkValue);
    }

    const noneLinkValues = [
      'H:\\special\\windäws\\with spaces\\and, tons of, commas and .dots\\file.txt',
      'file://///server/share/path/to/file.txt',
      'Peter',
      123
    ];

    for (const noneLinkValue of noneLinkValues) {
      render(<DisplayField value={noneLinkValue} />);
      const noneLink = screen.queryByText(noneLinkValue);
      expect(noneLink).toBeVisible();
      expect(noneLink).not.toBeInstanceOf(HTMLAnchorElement);
    }
  });

  it('can force a dataType', () => {
    const {
      container
    } = render(
      <DisplayField
        dataType={'date'}
        value={'2024-07-17T11:01:38.128Z'}
      />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
    const dateElem = screen.getByText('17.07.2024');
    expect(dateElem).toBeVisible();
  });

  it('can render values from a valueMap', () => {
    const valueMap = {
      key1: 'value1'
    };

    render(
      <DisplayField
        value={'key1'}
        valueMap={valueMap}
      />,
      {
        wrapper: createReduxWrapper()
      });

    const valueElem = screen.getByText('value1');
    expect(valueElem).toBeVisible();
  });

  it('does render empty string for undefined', () => {
    const {
      container
    } = render(
      <DisplayField
        value={undefined}
      />,
      {
        wrapper: createReduxWrapper()
      });

    expect(container).toBeVisible();
    const fieldElem = container.querySelector('.displayfield');
    expect(fieldElem).toHaveTextContent('');
  });

});
