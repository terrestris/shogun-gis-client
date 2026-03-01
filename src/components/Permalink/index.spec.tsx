import React from 'react';

import {
  cleanup,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import { store } from '../../store/store';

import Permalink from './index';

let map: OlMap;
let windowSpy: jest.SpyInstance<Window | null>;

describe('<Permalink />', () => {
  const originalPrompt = window.prompt;

  beforeEach(() => {
    document.body.innerHTML = '<div id="map"></div>';
    map = new OlMap({
      target: 'map',
      view: new OlView({
        center: [0, 0],
        zoom: 10
      }),
      layers: []
    });
    map.renderSync();

    windowSpy = jest.spyOn(window, 'open').mockImplementation(undefined);
    window.prompt = jest.fn(() => 'mocked response');
  });

  afterEach(() => {
    cleanup();
    windowSpy.mockRestore();
    window.prompt = originalPrompt;
  });

  it('is defined', () => {
    expect(Permalink).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = renderInMapContext(
      map,
      <Provider store={store}>
        <Permalink />
      </Provider>
    );
    expect(container).toBeVisible();
  });

  it('icons are displayed with links', async () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Permalink />
      </Provider>
    );
    const iconsElem = document.querySelector('.icons');
    expect(iconsElem).toBeVisible();

    const mailElem = screen.getByLabelText('mail');
    expect(mailElem).toBeVisible();

    const whatsAppElem = screen.getByLabelText('whats-app');
    expect(whatsAppElem).toBeVisible();

    fireEvent.click(mailElem);
    fireEvent.click(whatsAppElem);
    expect(windowSpy).toHaveBeenCalledTimes(2);
  });

  it('permalink is available and can be copied', async () => {
    document.execCommand = jest.fn();

    renderInMapContext(
      map,
      <Provider store={store}>
        <Permalink />
      </Provider>
    );
    const linkElem = document.querySelector('.ant-input');
    const link = linkElem?.getAttribute('value');
    expect(link).toBe('http://localhost/?customLayerAttributes=%5B%5D&center=0%3B0&zoom=10&layers=');

    const copyElem = screen.getByLabelText('copy');
    expect(copyElem).toBeVisible();
    fireEvent.click(copyElem);
    await waitFor(() => expect(document.querySelector('.ant-notification')).toBeInTheDocument());
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
