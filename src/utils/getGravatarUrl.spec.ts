import getGravatarUrl from './getGravatarUrl';

describe('<getGravatarUrl />', () => {

  it('is defined', () => {
    expect(getGravatarUrl).not.toBeUndefined();
  });

  it('returns the correct URL for Gravatar', () => {
    let url = getGravatarUrl({
      email: 'info@terrestris.de',
      size: 28
    });

    expect(url).toEqual('https://www.gravatar.com/avatar/c8086408fe02fde6e2c9d2847ea4fa3a?s=28&r=g&d=identicon');

    url = getGravatarUrl({
      email: 'reus@bvb.de',
      size: 80
    });

    expect(url).toEqual('https://www.gravatar.com/avatar/37f09842743c0fdc8b7aa219a513b104?s=80&r=g&d=identicon');

    url = getGravatarUrl({
      email: 'info@terrestris.de',
      size: 28,
      force: true
    });

    expect(url).toEqual('https://www.gravatar.com/avatar/c8086408fe02fde6e2c9d2847ea4fa3a?s=28&r=g&d=identicon&f=y');

    url = getGravatarUrl({
      email: 'info@terrestris.de',
      size: 28,
      defaultImage: 'monsterid'
    });

    expect(url).toEqual('https://www.gravatar.com/avatar/c8086408fe02fde6e2c9d2847ea4fa3a?s=28&r=g&d=monsterid');

    url = getGravatarUrl({
      email: 'info@terrestris.de',
      size: 28,
      rating: 'pg'
    });

    expect(url).toEqual('https://www.gravatar.com/avatar/c8086408fe02fde6e2c9d2847ea4fa3a?s=28&r=pg&d=identicon');
  });

});
