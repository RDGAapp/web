import * as api from 'helpers/api';

describe('api helper', () => {
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
      expect(fetchMock).toBeCalledTimes(1);
      expect(fetchMock).toBeCalledWith(
        '/test/players?page=1&surname=&town=&onlyActive=true'
      );
    });

    test('should call fetch with filled surname and town', () => {
      api.getPlayers(1, 'test', 'Нижний Новгород');
      expect(fetchMock).toBeCalledTimes(1);
      expect(fetchMock).toBeCalledWith(
        '/test/players?page=1&surname=test&town=%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9%2520%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4&onlyActive=true'
      );
    });

    describe('getPlayer function', () => {
      test('should call fetch with right URL', () => {
        api.getPlayer(1);
        expect(fetchMock).toBeCalledTimes(1);
        expect(fetchMock).toBeCalledWith('/test/players/1');
      });
    });
  });
});
