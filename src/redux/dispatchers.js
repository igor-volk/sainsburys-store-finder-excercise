import { loadSearchData } from '../services';
import {
  loadDataSuccessAction,
  loadDataFailureAction,
  searchAction,
  toggleHCModeAction,
} from './actions';
import { getSearchResults } from './selectors';

const loadData = () => async dispatch => {
  try {
    const data = await loadSearchData();
    dispatch(loadDataSuccessAction(data));
  } catch (error) {
    dispatch(loadDataFailureAction(error));
  }
};

const search = (input, history) => (dispatch, getState) => {
  dispatch(searchAction(input));
  const state = getState();
  if (getSearchResults(state)) {
    history.push('/results');
  }
};

const toggleHighContrast = value => dispatch => {
  dispatch(toggleHCModeAction(value));
};

export { loadData, search, toggleHighContrast };
