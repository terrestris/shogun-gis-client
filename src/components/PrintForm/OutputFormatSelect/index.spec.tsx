import React from 'react';

import {
  render,
  screen
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';

import {
  findAntdDropdownOptionByText
} from '@terrestris/react-geo/dist/Util/antdTestQueries';

import OutputFormatSelect from './index';

describe('<OutputFormatSelect />', () => {

  let printManager: MapFishPrintV3Manager;

  beforeEach(() => {
    printManager = new MapFishPrintV3Manager({});
  });

  it('is defined', () => {
    expect(OutputFormatSelect).not.toBeUndefined();
  });

  it('can be rendered', async () => {
    const {
      container
    } = render(
      <OutputFormatSelect
        printManager={printManager}
        outputFormats={['PDF', 'PNG']}
      />
    );
    expect(container).toBeVisible();
  });

  it('output format options are rendered', async () => {
    render(
      <OutputFormatSelect
        printManager={printManager}
        outputFormats={['PDF', 'PNG']}
      />
    );
    const combobox = screen.getByRole('combobox');
    userEvent.click(combobox);

    const optionPng = await findAntdDropdownOptionByText('PNG');
    const optionPdf = await findAntdDropdownOptionByText('PDF');
    // would be nicer to test for `toBeVisible`, but antd seems to be in the way
    expect(optionPng).toBeInTheDocument();
    expect(optionPdf).toBeInTheDocument();
  });

});
