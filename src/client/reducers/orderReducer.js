import * as types from '../constants/actionTypes';

const initialState = {
  order: {},
};

export default (previousState = initialState, action) => {
  let stateCopy;
  let orderCopy;
  switch (action.type) {
    case types.ADD_TO_CART: {
      stateCopy = Object.assign({}, previousState);
      orderCopy = Object.assign({}, stateCopy.order);
      if(orderCopy[action.payload.name]) {
        orderCopy[action.payload.name].quantity += action.payload.quantity
      } else {
        orderCopy[action.payload.name] = action.payload
      }
      stateCopy.order = orderCopy;
      return stateCopy;
    }
    default:
      return previousState;
  }
}

