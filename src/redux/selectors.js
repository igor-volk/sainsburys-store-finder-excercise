const getSearchResults = state => {
  return state.search.searchResults;
};

const getHighContrast = state => {
  return state.app.highContrast;
};

export { getSearchResults, getHighContrast };
