import React from 'react';

import {
  cleanup,
  screen,
  fireEvent

} from '@testing-library/react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import { store } from '../../store/store';

import Permalink from './index';

let map: OlMap;
let windowSpy;

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
        <Permalink />,
      </Provider>
    );
    expect(container).toBeVisible();
  });

  it('icons are displayed with links', async () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Permalink />,
      </Provider>
    );
    const iconsElem = await document.querySelector('.icons');
    await expect(iconsElem).toBeVisible();

    const mailElem = await screen.getByLabelText('mail');
    await expect(mailElem).toBeVisible();

    const whatsAppElem = await screen.getByLabelText('whats-app');
    await expect(whatsAppElem).toBeVisible();

    await fireEvent.click(mailElem);
    await fireEvent.click(whatsAppElem);
    await expect(windowSpy).toHaveBeenCalledTimes(2);
  });

  it('permalink is available and can be copied', async () => {
    document.execCommand = jest.fn();

    renderInMapContext(
      map,
      <Provider store={store}>
        <Permalink />,
      </Provider>
    );
    const linkElem = await document.querySelector('.ant-input');
    let link = await linkElem?.getAttribute('value');
    await expect(link).toBe('http://localhost/?customLayerAttributes=%5B%5D&center=0%3B0&zoom=10&layers=');

    const copyElem = await screen.getByLabelText('copy');
    await expect(copyElem).toBeVisible();
    await fireEvent.click(copyElem);
    // TODO
    // await expect(document.querySelector('.ant-message')).toBeInTheDocument();
    await expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
