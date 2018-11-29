import * as types from '../constants/actionTypes';

const initialState = {
  productList: [],
};

export default (previousState = initialState, action) => {
  let stateCopy;
  let arrCopy;
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.productList = action.payload;
      return stateCopy;
    }
    case types.GET_PRODUCTS_FAILURE: {
      console.log(action.payload);
    }
    case types.ADD_QUANTITY: {
      stateCopy = Object.assign({}, previousState);
      arrCopy = stateCopy.productList.slice();
      arrCopy[action.payload].quantity += 1;
      stateCopy.productList = arrCopy;
      return stateCopy;
    }
    case types.REMOVE_QUANTITY: {
      stateCopy = Object.assign({}, previousState);
      arrCopy = stateCopy.productList.slice();
      if(arrCopy[action.payload].quantity > 0) {
        arrCopy[action.payload].quantity -= 1;
      }
      stateCopy.productList = arrCopy;
      return stateCopy;
    }
    case types.RESET_QUANTITY: {
      console.log('RESETTING QUANTITY');
      stateCopy = Object.assign({}, previousState);
      arrCopy = stateCopy.productList.slice();
      arrCopy[action.payload].quantity = 0;
      stateCopy.productList = arrCopy;
      return stateCopy;
    }
    case types.RESET_PRODUCTS: {
      return initialState;
    }
    default:
      return previousState;
  }
}

