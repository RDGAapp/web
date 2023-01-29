import routes from 'helpers/routes';

describe('routes helper', () => {
  test('should return routes', () => {
    expect(routes.About).toBe('/about');
    expect(routes.Contacts).toBe('/contacts');
    expect(routes.Home).toBe('/');
    expect(routes.International).toBe('/international');
    expect(routes.Join).toBe('#join');
    expect(routes.Master).toBe('/master');
    expect(routes.Menu).toBe('#menu');
    expect(routes.Newbie).toBe('/newbie');
    expect(routes.Players).toBe('/players');
    expect(routes.Pro).toBe('/pro');
    expect(routes.Training).toBe('/training');
    expect(routes.Service).toBe('/service');
    expect(routes.Calendar).toBe('/calendar');
  });
});
