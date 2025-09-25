import React from 'react';

import { configureStore } from '@reduxjs/toolkit';

import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react';

import { Provider } from 'react-redux';

import ToolMenu from './index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));
jest.mock('@terrestris/react-util/dist/Hooks/useMap/useMap', () => ({
  useMap: () => ({})
}));
jest.mock('../../hooks/usePlugins', () => () => []);
jest.mock('../../hooks/useSHOGunAPIClient', () => () => ({
  getKeycloak: () => ({
    hasResourceRole: () => true,
    clientId: 'test-client'
  })
}));
jest.mock('../LanguageSelector', () => () => <div data-testid="language-selector" />);

const createStore = (preloadedState: any) =>
  configureStore({
    reducer: () => preloadedState,
    preloadedState
  });

const initialState = {
  toolMenu: {
    availableTools: ['default'],
    activeKeys: [],
    maxHeight: 500,
    width: 240
  },
  layerTree: {
    activeUploadTools: []
  }
};

describe('<ToolMenu />', () => {
  const renderWithProvider = (ui: React.ReactElement, state = initialState) => {
    const store = createStore(state);
    return render(<Provider store={store}>{ui}</Provider>);
  };

  it('is defined', () => {
    expect(ToolMenu).not.toBeUndefined();
  });

  it('renders the ToolMenu container', () => {
    renderWithProvider(<ToolMenu />);
    expect(screen.getByLabelText('tool-menu')).toBeInTheDocument();
  });

  it('renders collapse button and toggles collapsed state', async () => {
    renderWithProvider(<ToolMenu />);
    const collapseBtn = screen.getByLabelText('collapse-button');
    expect(collapseBtn).toBeInTheDocument();
    fireEvent.click(collapseBtn);
    const toolMenu = await document.querySelector('tool-menu collapsed');
    waitFor(() => {
      expect(toolMenu).toBeInTheDocument();
      expect(document.querySelector('.dynamicWidth')).not.toBeInTheDocument();
    });
  });

  it('renders tool panels for default tools', () => {
    renderWithProvider(<ToolMenu />);
    expect(screen.getByText('ToolMenu.measure')).toBeInTheDocument();
    expect(screen.getByText('ToolMenu.draw')).toBeInTheDocument();
    expect(screen.getByText('ToolMenu.featureInfo')).toBeInTheDocument();
    expect(screen.getByText('ToolMenu.print')).toBeInTheDocument();
    expect(screen.getByText('ToolMenu.layertree')).toBeInTheDocument();
    expect(screen.getByText('Permalink.title')).toBeInTheDocument();
    expect(screen.getByText('ToolMenu.languageSelect')).toBeInTheDocument();
  });

  it('renders dynamicWidth handle when not collapsed', () => {
    renderWithProvider(<ToolMenu />);
    expect(document.querySelector('.dynamicWidth')).toBeInTheDocument();
  });
});
