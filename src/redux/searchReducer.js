import types from './types';

const initialState = {
  data: null,
  searchResults: null,
  error: null,
};

const search = (data, input) => {
  return data.area === input ? data : null;
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case types.LOAD_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case types.SEARCH:
      return {
        ...state,
        searchResults: search(state.data, action.input),
      };
    default:
      return state;
  }
};

export default searchReducer;
