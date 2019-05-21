import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Search from './components/Search';
import Results from './components/Results';
import NoMatch from './components/NoMatch';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onContrastModeChange = this.onContrastModeChange.bind(this);
    this.getAppClassNames = this.getAppClassNames.bind(this);
  }

  componentDidMount() {
    this.props.loadData();
  }

  onContrastModeChange(e) {
    this.props.toggleHighContrast(e.target.checked);
  }

  getAppClassNames() {
    var appClass = classNames({
      app: true,
      'app-normal': !this.props.highContrast,
      'app-inverted': this.props.highContrast,
    });

    return appClass;
  }

  render() {
    return (
      <div className={this.getAppClassNames()}>
        <header className="app-header">
          <form>
            <input
              type="checkbox"
              id="high-contrast-toggle"
              value={this.props.highContrast}
              onChange={this.onContrastModeChange}
              checked={this.props.highContrast}
            />
            <label htmlFor="high-contrast-toggle">High contrast mode</label>
          </form>
        </header>
        <BrowserRouter>
          <Switch>
            <Redirect from="/" exact to="/search" />
            <Route
              exact
              path="/search"
              render={props => <Search {...props} />}
            />
            <Route exact path="/results" component={Results} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  loadData: PropTypes.func.isRequired,
  toggleHighContrast: PropTypes.func.isRequired,
  highContrast: PropTypes.bool.isRequired,
};

export default App;
