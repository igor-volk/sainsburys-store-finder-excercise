import types from './types';

const initialState = {
  highContrast: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_HIGH_CONTRAST:
      return {
        highContrast: action.value,
      };
    default:
      return state;
  }
};

export default appReducer;
