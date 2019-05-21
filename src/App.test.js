import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Given App component: ', () => {
  let wrapper;

  const loadData = jest.fn();
  const toggleHighContrast = jest.fn();

  beforeAll(() => {
    wrapper = shallow(
      <App
        loadData={loadData}
        toggleHighContrast={toggleHighContrast}
        highContrast={false}
      />
    );
  });

  it('should render a header', () => {
    const header = wrapper.find('.app-header');
    expect(header).toHaveLength(1);
  });

  it('should render BrowserRouter', () => {
    const router = wrapper.find(BrowserRouter);
    expect(router).toHaveLength(1);
  });

  it('should call loadData() when mounted', () => {
    expect(loadData).toHaveBeenCalled();
  });

  describe('WHEN the High Contrast Mode is on', () => {
    beforeEach(() => {
      wrapper = shallow(
        <App
          loadData={loadData}
          toggleHighContrast={toggleHighContrast}
          highContrast={true}
        />
      );
    });

    it('should add inverted style to the App', () => {
      const className = wrapper.find('.app-inverted');
      expect(className).toHaveLength(1);
    });
  });

  describe('WHEN the High Contrast Mode is off', () => {
    beforeEach(() => {
      wrapper = shallow(
        <App
          loadData={loadData}
          toggleHighContrast={toggleHighContrast}
          highContrast={false}
        />
      );
    });

    it('should add normal style to the App', () => {
      const className = wrapper.find('.app-normal');
      expect(className).toHaveLength(1);
    });
  });

  it('should call toggleHighContrast() when checkbox is clicked', () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { checked: true } });
    expect(toggleHighContrast).toHaveBeenCalledWith(true);
  });
});
