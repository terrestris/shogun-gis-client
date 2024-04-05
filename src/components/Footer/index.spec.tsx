import React from 'react';

import {
  render, screen
} from '@testing-library/react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';

import { Provider } from 'react-redux';

import { renderInMapContext } from '@terrestris/react-util/dist/Util/rtlTestUtils';

import { store } from '../../store/store';

import Footer from './index';

describe('<Footer />', () => {
  const center = [829729, 6708850];
  let map: OlMap;

  beforeEach(() => {
    map = new OlMap({
      view: new OlView({
        center,
        zoom: 10
      }),
      controls: [],
      layers: []
    });
  });

  it('is defined', () => {
    expect(Footer).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(container).toBeVisible();
  });

  it('contact is rendered', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const contact = screen.getByText('Footer.contact');
    expect(contact).toBeVisible();
  });

  it('imprint is rendered', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const imprint = screen.getByText('Footer.imprint');
    expect(imprint).toBeVisible();
  });

  it('privacy is rendered', () => {
    renderInMapContext(
      map,
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const privacy = screen.getByText('Footer.privacypolicy');
    expect(privacy).toBeVisible();
  });

  it('mouseposition controls is rendered', () => {
    const { container } = renderInMapContext(
      map,
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const mousePosition = container.querySelector('div.ol-mouse-position');
    expect(mousePosition).toBeVisible();
  });

  it('scalebar control is rendered', () => {
    const { container } = renderInMapContext(
      map,
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    const scalebar = container.querySelector('div.ol-scale-line');
    expect(scalebar).toBeVisible();
  });
});
