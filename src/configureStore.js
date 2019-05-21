import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './redux/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);

  return { store, persistor };
}
