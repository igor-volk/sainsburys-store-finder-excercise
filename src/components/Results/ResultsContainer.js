import { connect } from 'react-redux';

import Results from './Results';
import { getSearchResults } from '../../redux/selectors';

const mapStateToProps = state => ({
  searchResults: getSearchResults(state),
});

const ResultsContainer = connect(
  mapStateToProps,
  undefined
)(Results);

export default ResultsContainer;
