import api from 'helpers/api';

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
      expect(fetchMock).toBeCalledWith('/test/players?page=1&surname=&town=');
    });

    test('should call fetch with filled surname and town', () => {
      api.getPlayers(1, 'test', 'Нижний Новгород');
      expect(fetchMock).toBeCalledTimes(1);
      expect(fetchMock).toBeCalledWith('/test/players?page=1&surname=test&town=Нижний%20Новгород');
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
