import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
const mapDispatchToProps = (dispatch) => {
  return {
    lowerQuantity: (index) => { dispatch(actions.removeQuantity(index)) },
    addQuantity: (index) => { dispatch(actions.addQuantity(index)) },
  }
}
const OrderListItem = (props) => {
  const { name, price, quantity, removeItem } = props;
  const rightPanel = {
    'float': 'right',
    'marginLeft': '5px',
    'marginRight': '5px'
  }
  const divStyle = {
    'border': '1px solid grey',
    'display': 'inline-block',
    'paddingLeft': '5px',
    'width': '75%',
    'marginBottom': '3px'
  }
  return (
    <div style = {divStyle}>
      <h4>
        {name}
      </h4>
      <div>
        Price: {price}
      </div>
      <div>
        Qty: {quantity}
        <button  onClick = {() => props.addQuantity(name)} style = {rightPanel}>+</button>
        <button onClick = {() => props.lowerQuantity(name)} style = {rightPanel}>-</button>

      </div>
      <div>  
        <button onClick={() => removeItem(name)}>Remove</button>
      </div>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(OrderListItem);