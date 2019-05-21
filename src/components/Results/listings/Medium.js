import React from 'react';
import { formatDistance } from '../../helpers';

const Medium = ({ store, index, clickHandler, keyHandler }) => (
  <div
    className="listing-medium"
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
    </div>
    <div className="column-2">
      <div className="manager-info">
        <h4>Contact</h4>
        {store.contact.telephone}
        <h4>Manager</h4>
        {store.contact.manager}
      </div>
    </div>
    <div className="column-3">
      <h4>{store.open_status}</h4>
      {formatDistance(store.store_distance)}
    </div>
  </div>
);

export default Medium;
