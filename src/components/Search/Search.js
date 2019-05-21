import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: null,
    };
    this.doSearch = this.doSearch.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }

  doSearch() {
    const { search, history } = this.props;
    const { searchInput } = this.state;
    search(searchInput, history);
  }

  onSearchInput(e) {
    const { value } = e.target;
    this.setState({
      searchInput: value,
    });
  }

  renderLabel() {
    return (
      <label htmlFor="search-input" id="search-label">
        Search for stores
      </label>
    );
  }

  renderNoResults() {
    return (
      <div>
        <h3>No results found</h3>
        <label>Enter another location and search again</label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="search-form">
          {this.props.noResults ? this.renderNoResults() : this.renderLabel()}
          <div className="input-container">
            <input
              type="search"
              placeholder="Search"
              id="search-input"
              size="50"
              onChange={this.onSearchInput}
            />
            <button type="button" onClick={this.doSearch}>
              <span className="submit-btn-bg" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
