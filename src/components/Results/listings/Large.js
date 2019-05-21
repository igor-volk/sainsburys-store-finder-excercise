import React from 'react';
import { formatDistance } from '../../helpers';

const renderOpeningTime = (dayEntry, index) => {
  return (
    <div className="opening-time" key={index}>
      <span className="day">{dayEntry[0]}</span>
      <span>
        {dayEntry[1].start_time} - {dayEntry[1].end_time}
      </span>
    </div>
  );
};

const Large = ({ store, index, clickHandler, keyHandler }) => (
  <div
    className="listing-large"
    key={index}
    onClick={clickHandler}
    onKeyPress={keyHandler}
    tabIndex="0"
  >
    <div className="circle">{index + 1}</div>
    <div className="column-1">
      <h3>{store.store_name}</h3>
      {store.store_type}
      <br />
      <br />
      {store.contact.address1}
      <br />
      {store.contact.city}
      <br />
      {store.contact.post_code}
      <br />
      <h4>Contact</h4>
      {store.contact.telephone}
    </div>
    <div className="column-2">
      <div className="manager-info">
        <h4>Manager</h4>
        {store.contact.manager}
      </div>
    </div>
    <div className="column-3">
      <h4>Opening times</h4>
      {Object.entries(store.opening_times).map(renderOpeningTime)}
    </div>
    <div className="column-4">
      <h4>{store.open_status}</h4>
      {formatDistance(store.store_distance)}
    </div>
  </div>
);

export default Large;
