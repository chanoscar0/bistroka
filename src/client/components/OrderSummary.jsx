import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderListItem from './OrderListItem';

const mapStateToProps = store => ({
  orderList: store.orderReducer.orderList,
})

const OrderSummary = (props) => {
  const { orderList } = props;
  console.log(orderList);
  const orderArray = [];
  for (let key in orderList) {
    orderArray.push(<OrderListItem name={orderList[key].name} price={orderList[key].price} quantity={orderList[key].quantity} />)
  }
  console.log(orderArray)
  return (
    <div>
      {orderArray}
    </div>
  )
};

export default connect(mapStateToProps, null)(OrderSummary);