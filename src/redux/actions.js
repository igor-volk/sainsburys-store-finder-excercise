import actionTypes from './types';

const loadDataSuccessAction = data => ({
  type: actionTypes.LOAD_DATA_SUCCESS,
  data,
});

const loadDataFailureAction = error => ({
  type: actionTypes.LOAD_DATA_FAILURE,
  error,
});

const searchAction = input => ({
  type: actionTypes.SEARCH,
  input,
});

const toggleHCModeAction = value => ({
  type: actionTypes.TOGGLE_HIGH_CONTRAST,
  value,
});

export {
  loadDataSuccessAction,
  loadDataFailureAction,
  searchAction,
  toggleHCModeAction,
};
