import * as React from 'react';

import {
  render,
  screen
} from '@testing-library/react';

import { userEvent } from '@testing-library/user-event';

import UserChip from './index';

const testImage =
  // eslint-disable-next-line max-len
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QkBDTMr9G9osAAAAVxJREFUWMPtV7tKBEEQrKpT8M5DDARBDARBMDg0MvEDTLzUb/AP/AF/wdDQRBBBwfySAzXR3FgDUfEBGkiPyQYGt3Mzur0iXMNkNdvVTU1XLzCK/xYSq/1eZnICaEjclXgt8VHig8RLiTs/IcjMyqcB3AJolsDuAMwDMLPg0v4ziWHI2XPpQEEgpawPs9CsXAMSFxOhExIbHiJsZWAnPQg8pQLNwstfauDdLLRc5gCAmwRM320QAThNwJy4jWCJywlzoO3tBVeR5MfuRiRxJUJgtmqzKiPSG5D8ohYbltiOdGAm1xGV4f2bEo8AvEau3Es8BLDxq/3hW7WrEg8SlF929iUuZRORuFAsGaGi05M4N3QUFyzXAJw7SWndLPSjXiDxLcfNMuPTLIwPFGHxxrcckwPAmMTtgQSKHa5bw2LdjT3DTg0EOjERPgOY8mZgFli289f1c1NbrlEMjS9zzIOONuZ4PwAAAABJRU5ErkJggg==';

describe('<UserChip />', () => {
  it('is defined', () => {
    expect(UserChip).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const { container } = render(<UserChip />);
    expect(container).toBeVisible();
  });

  it('determines initials from given user name', () => {
    render(<UserChip userName="Shinji Kagawa" />);
    const chip = screen.getByText('SK');
    expect(chip).toBeVisible();
  });

  it('uses imageSrc if image is given', () => {
    render(<UserChip imageSrc={testImage} />);
    const userImage = screen.getByRole('img');
    expect(userImage).toBeVisible();
    expect(userImage).toHaveAttribute('src', testImage);
  });

  it('uses initials if image is not given', () => {
    render(<UserChip userName="Shinji Kagawa" />);
    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });

  it('should render a dropdown', async () => {
    const exampleMenu = {
      items: [
        {
          label: <div role="menu">Example menu</div>,
          key: 'example'
        }
      ]
    };
    render(
      <UserChip
        userName="Shinji Kagawa"
        userMenu={exampleMenu}
      />
    );
    const chip = screen.getByText('SK').parentElement;
    await userEvent.click(chip);
    const menu = screen.getByText('Example menu');
    // `toBeVisible` does not work because antd seems to be in the way
    expect(menu).toBeInTheDocument();
  });

  it('should not render a dropdown for invalid configuration', () => {
    render(
      <UserChip
        userName="Shinji Kagawa"
        userMenu={undefined}
      />
    );
    const menu = screen.queryByRole('menu');
    expect(menu).not.toBeInTheDocument();
  });

  it('should pass style prop', () => {
    render(
      <UserChip
        userName="Shinji Kagawa"
        style={{ backgroundColor: 'yellow' }}
      />
    );
    const chip = screen.getByText('Shinji Kagawa').parentElement;
    expect(chip).toHaveStyle({
      backgroundColor: 'yellow'
    });
  });
});
