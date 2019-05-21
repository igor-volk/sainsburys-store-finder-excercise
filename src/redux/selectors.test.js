import { getSearchResults, getHighContrast } from './selectors';

describe('selectors', () => {
  const state = {
    search: {
      searchResults: 'my results',
    },
    app: {
      highContrast: true,
    },
  };

  it('should get search results from the state', () => {
    expect(getSearchResults(state)).toEqual('my results');
  });

  it('should get high contrast value from the state', () => {
    expect(getHighContrast(state)).toBe(true);
  });
});
