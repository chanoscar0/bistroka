import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderListItem from './OrderListItem';

const mapStateToProps = store => ({
  orderList: store.orderReducer.orderList,
})

const OrderSummary = (props) => {
  const { orderList } = props;
  let subtotal = 0;
  let total = 0;
  console.log(orderList);
  const orderArray = [];
  for (let key in orderList) {
    subtotal = subtotal + (parseFloat(orderList[key].price.slice(1)) * orderList[key].quantity);
    subtotal = parseFloat(subtotal);
    console.log(subtotal);
    orderArray.push(<OrderListItem name={orderList[key].name} price={orderList[key].price} quantity={orderList[key].quantity} />)
  }
  let tax = subtotal * .0725;
  console.log(tax);
  total = subtotal + tax;
  console.log(total);
  subtotal = subtotal.toFixed(2);
  total = total.toFixed(2);
  return (
    <div>
      <h2>Order Summary:</h2>
      {orderArray}
      <h3>Subtotal: ${subtotal}</h3>
      <h3>Tax: 7.25%</h3>
      <h3>Grand Total: ${total}</h3>
      <button>Checkout</button>
    </div>
  )
};

export default connect(mapStateToProps, null)(OrderSummary);