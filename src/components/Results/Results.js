import React from 'react';
import MediaQuery from 'react-responsive';
import '../../styles/results.css';

import Large from './listings/Large';
import Medium from './listings/Medium';
import Small from './listings/Small';
import { formatStoreName } from '../helpers';

const navigateToStore = store => {
  const { store_code, store_name } = store;
  const formattedStoreName = formatStoreName(store_name);
  const url = `https://stores.sainsburys.co.uk/${store_code}/${formattedStoreName}`;

  window.open(url);
};

const filterKey = (event, store) => {
  if (event.charCode === 13) {
    navigateToStore(store);
  }
};

const renderListing = (store, index) => (
  <React.Fragment key={index}>
    <MediaQuery minWidth={1025}>
      <Large
        store={store}
        index={index}
        key={index}
        clickHandler={() => navigateToStore(store)}
        keyHandler={event => filterKey(event, store)}
      />
    </MediaQuery>
    <MediaQuery minWidth={601} maxWidth={1024}>
      <Medium
        store={store}
        index={index}
        key={index}
        clickHandler={() => navigateToStore(store)}
        keyHandler={event => filterKey(event, store)}
      />
    </MediaQuery>
    <MediaQuery maxWidth={600}>
      <Small
        store={store}
        index={index}
        key={index}
        clickHandler={() => navigateToStore(store)}
        keyHandler={event => filterKey(event, store)}
      />
    </MediaQuery>
  </React.Fragment>
);

const Results = props => (
  <div>
    <div className="results-header">
      {props.searchResults.result_count} found for "{props.searchResults.area}"
    </div>
    <div className="results-container">
      {props.searchResults.listing.map(renderListing)}
    </div>
  </div>
);

export default Results;
