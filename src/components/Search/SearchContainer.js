import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from './Search';

import { search } from '../../redux/dispatchers';
import { getSearchResults } from '../../redux/selectors';

const mapStateToProps = state => ({
  noResults: getSearchResults(state) ? false : true,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      search,
    },
    dispatch
  );

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
