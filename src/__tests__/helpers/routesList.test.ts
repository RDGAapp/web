import routesList from 'helpers/routesList';

describe('routesList helper', () => {
  test('should return array of routes', () => {
    expect(routesList).toEqual([
      '/',
      '/about',
      '/master',
      '/training',
      '/newbie',
      '/pro',
      '/international',
      '/shop',
      '/companies',
      '/players',
      '#contacts',
      '#menu',
      '#buy',
      '#join',
    ]);
  });
});
