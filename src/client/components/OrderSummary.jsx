import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderListItem from './OrderListItem';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  orderList: store.orderReducer.orderList,
})

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (item) => {
      dispatch(actions.removeItem(item));
    }
  }
}

const OrderSummary = (props) => {
  const { orderList, removeItem } = props;
  console.log(orderList);
  const orderArray = [];
  for (let key in orderList) {
    orderArray.push(<OrderListItem name={orderList[key].name} price={orderList[key].price} quantity={orderList[key].quantity} removeItem={removeItem}/>)
  }
  console.log(orderArray)
  return (
    <div>
      {orderArray}
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);