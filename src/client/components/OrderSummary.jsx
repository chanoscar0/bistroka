import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderListItem from './OrderListItem';
import * as actions from '../actions/actions';
import { Link } from 'react-router-dom';

const mapStateToProps = store => ({
  orderList: store.orderReducer.orderList,
})

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (item) => {
      dispatch(actions.removeItem(item));
    },
    checkoutDB: (object) => {
      dispatch(actions.checkout(object));
    }
  }
}

const OrderSummary = (props) => {
  const { orderList, removeItem, checkoutDB } = props;
  let subtotal = 0;
  let total = 0;
  const orderArray = [];
  for (let key in orderList) {
    if(key !== 'totalPrice'){
      console.log('ORDER LIST PRICE',orderList[key].price.slice(1));
      subtotal = subtotal + (parseFloat(orderList[key].price.slice(1)) * orderList[key].quantity);
      subtotal = parseFloat(subtotal);
      console.log(subtotal);
      orderArray.push(<OrderListItem name={orderList[key].name} price={orderList[key].price} quantity={orderList[key].quantity} removeItem={removeItem} />)
    }
  }
  let tax = subtotal * .0725;
  total = subtotal + tax;
  subtotal = subtotal.toFixed(2);
  total = total.toFixed(2);
  orderList.totalPrice = Number(total)
  return (
    <div>
      <h2>Order Summary:</h2>
      {orderArray}
      <h3>Subtotal: ${subtotal}</h3>
      <h3>Tax: 7.25%</h3>
      <h3>Grand Total: ${total}</h3>
      <button onClick={() => checkoutDB(orderList)}><Link to='/'>Checkout</Link></button>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);