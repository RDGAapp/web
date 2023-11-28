import routes from 'helpers/routes';

describe('routes helper', () => {
  test('should return routes', () => {
    expect(routes.About).toBe('/about');
    expect(routes.Contacts).toBe('/contacts');
    expect(routes.Home).toBe('/');
    expect(routes.Join).toBe('#join');
    expect(routes.Players).toBe('/players');
    expect(routes.Calendar).toBe('/calendar');
  });
});
