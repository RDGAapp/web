import api from 'helpers/api';
import { store } from 'store';
import { getPlayers, getPlayer } from 'store/players/thunks';

jest.mock('helpers/api');

describe('player requests', () => {
  const testError = 'test error';

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.unmock('helpers/api');
  });

  describe('getPlayers function', () => {
    const players = [{ rdgaNumber: 1, name: 'test' }];

    test('should fulfill', async () => {
      (api.getPlayers as jest.Mock).mockReturnValue({ ok: true, json: () => players });

      const result = await store.dispatch(getPlayers({ pageNumber: 1 }));

      expect(api.getPlayers).toBeCalledTimes(1);
      expect(api.getPlayers).toBeCalledWith(1, undefined, undefined);
      expect(result.payload).toEqual(players);
      expect(result.meta.requestStatus).toBe('fulfilled');
      expect(store.getState().player).toEqual({
        players,
        loading: false,
        error: null,
      });
    });

    test('should pass surname and town', async () => {
      (api.getPlayers as jest.Mock).mockReturnValue({ ok: true, json: () => players });

      const result = await store.dispatch(getPlayers({ pageNumber: 1, surname: 'test', town: 'Белгород' }));

      expect(api.getPlayers).toBeCalledTimes(1);
      expect(api.getPlayers).toBeCalledWith(1, 'test', 'Белгород');
      expect(result.payload).toEqual(players);
      expect(result.meta.requestStatus).toBe('fulfilled');
      expect(store.getState().player).toEqual({
        players,
        loading: false,
        error: null,
      });
    });

    test('should reject', async () => {
      (api.getPlayers as jest.Mock).mockResolvedValue({ ok: false, text: () => testError });

      const result = await store.dispatch(getPlayers({ pageNumber: 1 }));

      expect(api.getPlayers).toBeCalledTimes(1);
      expect(api.getPlayers).toBeCalledWith(1, undefined, undefined);
      expect(result.payload).toBe(testError);
      expect(result.meta.requestStatus).toBe('rejected');
      expect(store.getState().player).toEqual({
        players: null,
        loading: false,
        error: testError,
      });
    });
  });

  describe('getPlayer function', () => {
    const player = { rdgaNumber: 1, name: 'test' };

    test('should fulfilled', async () => {
      (api.getPlayer as jest.Mock).mockReturnValue({ ok: true, json: () => player });
      const result = await store.dispatch(getPlayer(1));

      expect(api.getPlayer).toBeCalledTimes(1);
      expect(api.getPlayer).toBeCalledWith(1);
      expect(result.payload).toEqual(player);
      expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('should reject', async () => {
      (api.getPlayer as jest.Mock).mockResolvedValue({ ok: false, text: () => testError });

      const result = await store.dispatch(getPlayer(1));

      expect(api.getPlayer).toBeCalledTimes(1);
      expect(api.getPlayer).toBeCalledWith(1);
      expect(result.payload).toBe(testError);
      expect(result.meta.requestStatus).toBe('rejected');
    });
  });
});
