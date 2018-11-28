import * as types from '../constants/actionTypes';

const initialState = {
  order: [],
};

export default (previousState = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case types.ADD_TO_CART: {
      stateCopy = Object.assign({}, previousState);
      orderCopy = stateCopy.order.slice();
      orderCopy.push(action.payload);
      stateCopy.order = orderCopy;
      return stateCopy;
    }

    default:
      return previousState;
  }
}

