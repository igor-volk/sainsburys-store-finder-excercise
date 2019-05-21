import React from 'react';
import { shallow } from 'enzyme';

import AppContainer from './AppContainer';
import App from './App';

describe('Given AppContainer: ', () => {
  let wrapper;
  let view;

  const store = {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({
      app: {
        highContrast: false,
      },
    }),
  };

  beforeAll(() => {
    wrapper = shallow(<AppContainer />, { context: { store } });
    view = wrapper.find(App);
  });

  it('should wrap the view', () => {
    expect(view).toHaveLength(1);
  });

  it('should pass highContrast as a prop', () => {
    const { highContrast } = view.props();
    expect(highContrast).toBeDefined();
    expect(highContrast).toEqual(false);
  });

  it('should map loadData to props', () => {
    const { loadData } = view.props();
    expect(loadData).toBeDefined();
    expect(typeof loadData).toEqual('function');
  });

  it('should map toggleHighContrast to props', () => {
    const { toggleHighContrast } = view.props();
    expect(toggleHighContrast).toBeDefined();
    expect(typeof toggleHighContrast).toEqual('function');
  });
});
