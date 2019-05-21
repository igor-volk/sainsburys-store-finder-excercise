import appReducer from './appReducer';
import { toggleHCModeAction } from './actions';

describe('app reducer', () => {
  let state;
  let action;
  let expectedState;

  beforeEach(() => {
    state = {
      highContrast: false,
    };
    action = toggleHCModeAction(true);
    expectedState = {
      highContrast: true,
    };
  });

  it('should set high contrast value', () => {
    const resultState = appReducer(state, action);
    expect(resultState).toEqual(expectedState);
  });
});
