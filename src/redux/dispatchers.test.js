import axios from 'axios';
import { loadData, search, toggleHighContrast } from './dispatchers';
import {
  loadDataSuccessAction,
  loadDataFailureAction,
  searchAction,
  toggleHCModeAction,
} from './actions';
import * as services from '../services';

describe('dispatchers', () => {
  let dispatch;
  let getState;

  describe('loadData()', () => {
    describe('WHEN data loads successfully', () => {
      beforeEach(() => {
        dispatch = jest.fn();
        jest.spyOn(services, 'loadSearchData').mockImplementation(() => 'data');
      });

      it('should dispatch LOAD_DATA_SUCCESS action', () => {
        return loadData()(dispatch).then(() => {
          expect(dispatch).toHaveBeenCalledWith(loadDataSuccessAction('data'));
        });
      });

      afterEach(() => {
        dispatch.mockReset();
      });
    });

    describe('WHEN data fails to load', () => {
      let error;
      beforeEach(() => {
        error = new Error('error');
        dispatch = jest.fn();
        jest.spyOn(services, 'loadSearchData').mockImplementation(() => {
          throw error;
        });
      });

      it('should dispatch LOAD_DATA_FAILURE action', () => {
        return loadData()(dispatch).then(() => {
          expect(dispatch).toHaveBeenCalledWith(loadDataFailureAction(error));
        });
      });

      afterEach(() => {
        dispatch.mockReset();
      });
    });
  });

  describe('search()', () => {
    let mockHistory;

    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn().mockReturnValue({
        search: {
          searchResults: 'Lots of results',
        },
      });
      mockHistory = {
        push: jest.fn(),
      };
      search('test input', mockHistory)(dispatch, getState);
    });

    it('should dispatch SEARCH action', () => {
      expect(dispatch).toHaveBeenCalledWith(searchAction('test input'));
    });

    describe('WHEN the search is successful', () => {
      beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn().mockReturnValue({
          search: {
            searchResults: 'Lots of results',
          },
        });
        mockHistory = {
          push: jest.fn(),
        };
        search('test input', mockHistory)(dispatch, getState);
      });

      it('should redirect to `/results` page ', () => {
        expect(mockHistory.push).toHaveBeenCalledWith('/results');
      });

      afterEach(() => {
        dispatch.mockReset();
        getState.mockReset();
      });
    });

    afterEach(() => {
      dispatch.mockReset();
      getState.mockReset();
    });
  });

  describe('GIVEN toggleHCModeAction() is called', () => {
    beforeEach(() => {
      dispatch = jest.fn();
      toggleHighContrast(true)(dispatch);
    });

    it('should dispatch TOGGLE_HIGH_CONTRAST action', () => {
      expect(dispatch).toHaveBeenCalledWith(toggleHCModeAction(true));
    });
  });
});
