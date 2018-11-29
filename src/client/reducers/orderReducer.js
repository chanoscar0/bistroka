import * as types from '../constants/actionTypes';

const initialState = {
  orderList: {},
};

export default (previousState = initialState, action) => {
  let stateCopy;
  let orderCopy;
  switch (action.type) {
    case types.ADD_TO_CART: {
      stateCopy = Object.assign({}, previousState);
      orderCopy = Object.assign({}, stateCopy.orderList);
      if(orderCopy[action.payload.name]) {
        orderCopy[action.payload.name].quantity += 1
      } else {
        action.payload.quantity = 1;
        orderCopy[action.payload.name] = action.payload
      }
      stateCopy.orderList = orderCopy;
      return stateCopy;
    }
    case types.ADD_QUANTITY: {
      stateCopy = Object.assign({}, previousState);
      orderCopy = Object.assign({},stateCopy.orderList);
      orderCopy[action.payload].quantity += 1;
      console.log('INSIDE ADD QUANTITY REDUCER',orderCopy[action.payload]);
      stateCopy.orderList = orderCopy;
      return stateCopy;
    }
    case types.REMOVE_QUANTITY: {
      stateCopy = Object.assign({}, previousState);
      orderCopy = Object.assign({}, stateCopy.orderList);
      if(orderCopy[action.payload].quantity > 0) {
        orderCopy[action.payload].quantity -= 1;
      }
      stateCopy.orderList = orderCopy;
      return stateCopy;
    }
    case types.CHECKOUT_FAILURE: {
      console.log(action.payload);
    }

    case types.CHECKOUT_SUCCESS: {
      return initialState;
    }

    default:
      return previousState;
  }
}

