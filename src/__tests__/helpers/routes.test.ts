import routes from 'helpers/routes';

describe('routes helper', () => {
  test('should return routes', () => {
    expect(routes.ABOUT).toBe('/about');
    expect(routes.COMPANIES).toBe('/companies');
    expect(routes.CONTACTS).toBe('#contacts');
    expect(routes.HOME).toBe('/');
    expect(routes.INTERNATIONAL).toBe('/international');
    expect(routes.JOIN).toBe('#join');
    expect(routes.MASTER).toBe('/master');
    expect(routes.MENU).toBe('#menu');
    expect(routes.NEWBIE).toBe('/newbie');
    expect(routes.PLAYERS).toBe('/players');
    expect(routes.PRO).toBe('/pro');
    expect(routes.SHOP).toBe('/shop');
    expect(routes.SHOP_FORM).toBe('#buy');
    expect(routes.TRAINING).toBe('/training');
  });
});
