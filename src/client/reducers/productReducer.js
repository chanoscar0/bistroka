import * as types from '../constants/actionTypes';

const initialState = {
  products: [],
};

export default (previousState = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS: {
      stateCopy = Object.assign({}, previousState);
      stateCopy.products = action.payload;
      return stateCopy;
    }

    case types.GET_PRODUCTS_FAILURE: {
      console.log(action.payload);
    }

    case types.RESET_PRODUCTS: {
      return initialState;
    }

    default:
      return previousState;
  }
}

