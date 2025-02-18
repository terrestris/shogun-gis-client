import React from 'react';

import {
  fireEvent,
  render,
  cleanup
} from '@testing-library/react';

import {
  Modal
} from 'antd';

import OlVectorLayer from 'ol/layer/Vector';
import OlMap from 'ol/Map';
import OlSourceVector from 'ol/source/Vector';
import OlView from 'ol/View';

import {
  Provider
} from 'react-redux';

import { DigitizeUtil } from '@terrestris/react-util/dist/Util/DigitizeUtil';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import {
  store
} from '../../../../store/store';

import DeleteAllButton from './index';

let map: OlMap;

jest.mock('antd', () => {
  const originalModule = jest.requireActual('antd');
  return {
    ...originalModule,
    Modal: {
      confirm: jest.fn()
    }
  };
});

jest.mock('@terrestris/react-util/dist/Util/DigitizeUtil', () => ({
  DigitizeUtil: {
    getDigitizeLayer: jest.fn()
  }
}));

const mockVectorLayer = new OlVectorLayer({
  source: new OlSourceVector()
});

describe('<DeleteAllButton />', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    document.body.innerHTML = '<div id="map"></div>';

    map = new OlMap({
      target: 'map',
      view: new OlView({
        zoom: 10
      }),
      controls: [],
      layers: [mockVectorLayer]
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('is defined', () => {
    expect(DeleteAllButton).not.toBeUndefined();
  });

  it('renders without crashing', () => {
    const { container } =
      renderInMapContext(
        map,
        <Provider store={store}>
          <DeleteAllButton
            className={'test'}
            digitizeLayer={mockVectorLayer}
          />
        </Provider>
      );
    expect(container).toBeVisible();
    expect(container.querySelector('button[type="button"]')).toBeInTheDocument();
  });

  it('uses the provided digitizeLayer when passed', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <DeleteAllButton
          className={'test'}
          digitizeLayer={mockVectorLayer}
        />
      </Provider>
    );

    const buttonElem = document.querySelector('button[type="button"]');

    if (!buttonElem) {
      return;
    };

    fireEvent.click(buttonElem);

    expect(Modal.confirm).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'DeleteAllButton.deleteAll',
        content: 'DeleteAllButton.confirmMessage',
        icon: expect.anything(),
        onOk: expect.any(Function)
      })
    );
  });

  it('uses the default digitizeLayer if no digitizeLayer is passed', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <DeleteAllButton
          className={'test'}
        />
      </Provider>
    );

    const buttonElem = document.querySelector('button[type="button"]');

    if (!buttonElem) {
      return;
    };

    fireEvent.click(buttonElem);

    expect(DigitizeUtil.getDigitizeLayer).toHaveBeenCalled();
    expect(Modal.confirm).toHaveBeenCalled();
  });

  it('calls the source clear method on confirmation', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <DeleteAllButton
          className={'test'}
          digitizeLayer={mockVectorLayer}
        />
      </Provider>
    );
    const clearSpy = jest.spyOn(mockVectorLayer.getSource()!, 'clear');

    const buttonElem = document.querySelector('button[type="button"]');

    if (!buttonElem) {
      return;
    };

    fireEvent.click(buttonElem);

    const confirmArgs = (Modal.confirm as jest.Mock).mock.calls[0][0];
    confirmArgs.onOk();

    expect(clearSpy).toHaveBeenCalledTimes(1);
  });

  it('does not render if the map is not available', () => {
    jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
      useMap: jest.fn(() => null)
    }));

    const { container } = render(<DeleteAllButton />);

    expect(container.firstChild).toBeNull();
  });
});
