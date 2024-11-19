import React from 'react';

import {
  screen,
  fireEvent,
  cleanup,
  waitFor,
  render
} from '@testing-library/react';

import { notification } from 'antd';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Select from 'ol/interaction/Select';
import OlMap from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import OlView from 'ol/View';

import {
  Provider
} from 'react-redux';

import { renderInMapContext } from '@terrestris/react-geo/dist/Util/rtlTestUtils';

import {
  store
} from '../../../../store/store';

import AttributionDrawer from './index';

let map: OlMap;
let selectInteraction = new Select();

jest.mock('antd', () => {
  const originalModule = jest.requireActual('antd');

  return {
    ...originalModule,
    notification: {
      ...originalModule.notification,
      success: jest.fn(),
      info: jest.fn(),
      destroy: jest.fn(),
      // eslint-disable-next-line react/jsx-key
      useNotification: jest.fn(() => [jest.fn(), <div data-testid="context-holder" />])
    }
  };
});

const mockFeature = new Feature({
  attribute1: 'value1',
  attribute2: 'value2',
  geometry: new Point(fromLonLat([0, 0]))
});


describe('<AttributionDrawer />', () => {
  const onCustomClose = jest.fn();
  const onClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    document.body.innerHTML = '<div id="map"></div>';

    selectInteraction.setProperties({
      ['name']: 'react-geo-select-interaction'
    });

    selectInteraction.getFeatures().extend([mockFeature]);

    map = new OlMap({
      target: 'map',
      view: new OlView({
        zoom: 10
      }),
      controls: [],
      layers: [],
      interactions: [selectInteraction]
    });

    map.addInteraction(selectInteraction);
  });

  afterEach(() => {
    cleanup();
  });
  it('is defined', () => {
    expect(AttributionDrawer).not.toBeUndefined();
  });

  it('renders correctly when open', () => {
    render(
      <AttributionDrawer
        open={true}
        onCustomClose={onCustomClose}
        onClose={onClose}
      />
    );
    expect(screen.getByText('Attribution.title')).toBeInTheDocument();
    expect(screen.getByText('Attribution.select')).toBeInTheDocument();
  });

  it('renders correctly when closed', () => {
    const { container } = render(
      <AttributionDrawer
        open={false}
        onCustomClose={onCustomClose}
        onClose={onClose}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('calls onCustomClose when form is interacted with', () => {
    render(
      <AttributionDrawer
        open={true}
        onCustomClose={onCustomClose}
        onClose={onClose}
      />
    );

    const inputElement = screen.getByText('Attribution.select');
    fireEvent.click(inputElement);

    expect(onCustomClose).not.toHaveBeenCalled();
  });

  it('handles form submission with notifications', async () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <AttributionDrawer
          open={true}
          onCustomClose={onCustomClose}
          onClose={onClose}
        />
      </Provider>
    );

    selectInteraction.dispatchEvent({
      type: 'select',
      selected: [mockFeature]
    });

    const submitButton = screen.getByText('Attribution.submit');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(notification.success).toHaveBeenCalled();
    });
  });

  it('updates available attributes on form value change', async () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <AttributionDrawer
          open={true}
          onCustomClose={onCustomClose}
          onClose={onClose}
        />
      </Provider>
    );

    selectInteraction.dispatchEvent({
      type: 'select',
      selected: [mockFeature]
    });

    const addButton = screen.getByRole('button', { name: 'Attribution.add' });

    fireEvent.click(addButton);

    const inputElement = document.querySelector('#fields_0_name');

    fireEvent.change(inputElement!, { target: { value: 'New Attribute' } });

    await waitFor(() => {
      expect(inputElement).toHaveAttribute('value', 'New Attribute');
    });
  });
});
