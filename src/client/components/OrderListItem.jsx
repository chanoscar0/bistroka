import React, { Component } from 'react';
import { connect } from 'react-redux';

const OrderListItem = (props) => {
  const { name, price, quantity, removeItem } = props;
  return (
    <div>
      <h4>
        {name}
      </h4>
      <div>
        Price: {price}
      </div>
      <div>
        Qty: {quantity}
      </div>
      <div>  
        <button onClick={() => removeItem(name)}>Remove</button>
      </div>
    </div>
  )
};

export default OrderListItem;