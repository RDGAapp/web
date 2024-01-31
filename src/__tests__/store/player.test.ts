import { store } from 'store';

describe('player slice', () => {
  test('should set default', () => {
    expect(store.getState().player).toEqual({
      players: null,
      player: null,
      loading: false,
      error: null,
    });
  });
});
