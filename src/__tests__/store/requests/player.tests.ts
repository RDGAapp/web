import * as api from 'api';
import { store } from 'store';
import { getPlayers, getPlayer } from 'store/players/thunks';

jest.mock('api');

describe('player requests', () => {
  const testError = 'test error';

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.unmock('api');
  });

  describe('getPlayers function', () => {
    const players = [{ rdgaNumber: 1, name: 'test' }];

    test('should fulfill', async () => {
      (api.getPlayers as jest.Mock).mockReturnValue({
        ok: true,
        json: () => players,
      });

      const result = await store.dispatch(getPlayers({ pageNumber: 1 }));

      expect(api.getPlayers).toHaveBeenCalledTimes(1);
      expect(api.getPlayers).toHaveBeenCalledWith(
        1,
        undefined,
        undefined,
        undefined,
      );
      expect(result.payload).toEqual(players);
      expect(result.meta.requestStatus).toBe('fulfilled');
      expect(store.getState().player).toEqual({
        players,
        player: null,
        loading: false,
        error: null,
      });
    });

    test('should pass surname and town', async () => {
      (api.getPlayers as jest.Mock).mockReturnValue({
        ok: true,
        json: () => players,
      });

      const result = await store.dispatch(
        getPlayers({
          pageNumber: 1,
          surname: 'test',
          town: 'Белгород',
          onlyActive: true,
        }),
      );

      expect(api.getPlayers).toHaveBeenCalledTimes(1);
      expect(api.getPlayers).toHaveBeenCalledWith(1, 'test', 'Белгород', true);
      expect(result.payload).toEqual(players);
      expect(result.meta.requestStatus).toBe('fulfilled');
      expect(store.getState().player).toEqual({
        players,
        player: null,
        loading: false,
        error: null,
      });
    });

    test('should reject', async () => {
      (api.getPlayers as jest.Mock).mockResolvedValue({
        ok: false,
        text: () => testError,
      });

      const result = await store.dispatch(getPlayers({ pageNumber: 1 }));

      expect(api.getPlayers).toHaveBeenCalledTimes(1);
      expect(api.getPlayers).toHaveBeenCalledWith(
        1,
        undefined,
        undefined,
        undefined,
      );
      expect((result as { error: { message: string } }).error.message).toBe(
        testError,
      );
      expect(result.meta.requestStatus).toBe('rejected');
      expect(store.getState().player).toEqual({
        players: null,
        player: null,
        loading: false,
        error: testError,
      });
    });
  });

  describe('getPlayer function', () => {
    const player = { rdgaNumber: 1, name: 'test' };

    test('should fulfilled', async () => {
      (api.getPlayer as jest.Mock).mockReturnValue({
        ok: true,
        json: () => player,
      });
      const result = await store.dispatch(getPlayer(1));

      expect(api.getPlayer).toHaveBeenCalledTimes(1);
      expect(api.getPlayer).toHaveBeenCalledWith(1);
      expect(result.payload).toEqual(player);
      expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('should reject', async () => {
      (api.getPlayer as jest.Mock).mockResolvedValue({
        ok: false,
        text: () => testError,
      });

      const result = await store.dispatch(getPlayer(1));

      expect(api.getPlayer).toHaveBeenCalledTimes(1);
      expect(api.getPlayer).toHaveBeenCalledWith(1);
      expect((result as { error: { message: string } }).error.message).toBe(
        testError,
      );
      expect(result.meta.requestStatus).toBe('rejected');
    });
  });
});
