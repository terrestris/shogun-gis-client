import React from 'react';

import {
  act,
  fireEvent,
  render,
  screen, waitFor
} from '@testing-library/react';

import { createReduxWrapper } from '../../utils/testUtils';

import JsonModal from '.';

let jsonString: string;

describe('<JsonModal />', () => {

  beforeAll(() => {
    jsonString = `{
    "name": "Monaco Editor Example",
    "keywords": ["react", "monaco-editor", "example"]
  }`;
  });

  it('is defined', () => {
    expect(JsonModal).toBeDefined();
  });

  it('can be rendered', () => {
    const {
      container
    } = render(
      <JsonModal
        label="test-label"
        value={jsonString}
      />,
      {
        wrapper: createReduxWrapper()
      });
    expect(container).toBeVisible();
  });

  it('modal can be opened', async () => {
    render(
      <JsonModal
        label="test-label"
        value={jsonString}
      />,
      {
        wrapper: createReduxWrapper()
      });

    const buttonElem = await screen.getByTitle('JsonModal.buttonTitle');
    await expect(buttonElem).toBeVisible();
    act(() => {
      fireEvent.click(buttonElem);
    });

    const titleElem = screen.getByText('test-label');
    await waitFor(() => expect(titleElem).toBeVisible());
  });
});
