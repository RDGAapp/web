import routesList from 'helpers/routesList';

describe('routesList helper', () => {
  test('should return array of routes', () => {
    expect(routesList).toEqual([
      '/',
      '/about',
      '/players',
      '/contacts',
      '#join',
      '/service',
      '/calendar',
      '/partners',
      '/admin',
      '/admin/players',
      '/admin/tournaments',
    ]);
  });
});
