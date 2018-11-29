import React, { Component } from 'react';
import { connect } from 'react-redux';

const OrderListItem = (props) => {
  const { name, price, quantity } = props;
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
        <button>Remove</button>
      </div>
    </div>
  )
};

export default OrderListItem;