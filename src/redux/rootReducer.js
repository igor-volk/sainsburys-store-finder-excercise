import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import appReducer from './appReducer';

export default combineReducers({
  search: searchReducer,
  app: appReducer,
});
