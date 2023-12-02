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
      '/admin/players/create',
      '/admin/players/update',
      '/admin/players/delete',
      '/admin/players/renew',
      '/admin/tournaments',
      '/admin/tournaments/create',
      '/admin/tournaments/update',
      '/admin/tournaments/delete',
    ]);
  });
});
