import * as types from '../constants/actionTypes';

const initialState = {
  products: [],
};

export default (previousState = initialState, action) => {
  let stateCopy;
  let arrCopy;
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.products = action.payload;
      return stateCopy;
    }
    case types.GET_PRODUCTS_FAILURE: {
      console.log(action.payload);
    }
    case types.ADD_QUANTITY: {
      stateCopy = Object.assign({}, previousState);
      arrCopy = stateCopy.products.slice();
      arrCopy[action.payload].quantity += 1;
      stateCopy.products = arrCopy;
      return stateCopy;
    }
    case types.REMOVE_QUANTITY: {
      stateCopy = Object.assign({}, previousState);
      arrCopy = stateCopy.products.slice();
      if(arrCopy[action.payload].quantity > 0) {
        arrCopy[action.payload].quantity -= 1;
      }
      stateCopy.products = arrCopy;
      return stateCopy;
    }
    case types.RESET_QUANTITY: {
      console.log('RESETTING QUANTITY');
      stateCopy = Object.assign({}, previousState);
      arrCopy = stateCopy.products.slice();
      arrCopy[action.payload].quantity = 0;
      stateCopy.products = arrCopy;
      return stateCopy;
    }
    case types.RESET_PRODUCTS: {
      return initialState;
    }
    default:
      return previousState;
  }
}

