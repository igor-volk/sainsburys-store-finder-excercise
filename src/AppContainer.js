import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './App';

import { loadData, toggleHighContrast } from './redux/dispatchers';
import { getHighContrast } from './redux/selectors';

const mapStateToProps = state => ({
  highContrast: getHighContrast(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadData,
      toggleHighContrast,
    },
    dispatch
  );

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
