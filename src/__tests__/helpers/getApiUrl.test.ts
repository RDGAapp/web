import getApiUrl from 'helpers/getApiUrl';

describe('getApiUrl helper', () => {
  test('should return value from env config file', () => {
    expect(getApiUrl('')).toBe('/test');
  });

  test('should return valid URL', () => {
    expect(getApiUrl('/user?all=true')).toBe('/test/user?all=true');
  });
});
