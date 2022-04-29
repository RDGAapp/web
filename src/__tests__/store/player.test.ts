import { store } from 'store';

describe('player slice', () => {
  test('should set default', () => {
    expect(store.getState().player).toEqual({
      players: null,
      loading: false,
      error: null,
    });
  });
});
