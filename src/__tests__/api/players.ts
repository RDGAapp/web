import * as api from 'api/players';

describe('api players', () => {
  const realFetch = global.fetch;
  const fetchMock = jest.fn();

  beforeAll(() => {
    global.fetch = fetchMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    global.fetch = realFetch;
  });

  describe('getPlayers function', () => {
    test('should call fetch with empty surname and town', () => {
      api.getPlayers(1);
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        '/test/players?page=1&surname=&town=&onlyActive=true',
        {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    });

    test('should call fetch with filled surname and town', () => {
      api.getPlayers(1, 'test', 'Нижний Новгород');
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        '/test/players?page=1&surname=test&town=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4&onlyActive=true',
        {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    });

    describe('getPlayer function', () => {
      test('should call fetch with right URL', () => {
        api.getPlayer(1);
        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith('/test/players/1', {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      });
    });
  });
});
