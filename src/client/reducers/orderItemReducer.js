import * as types from '../constants/actionTypes';

const initialState = {
  name: '',
  price: '',
  quantity: '',
  category: '',
  subcategory: '',
  productId: '',
  notes: '',
};

export default (previousState = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case types.ADD_QUANTITY: {
      stateCopy = Object.assign({}, previousState);
      return stateCopy;
    }

    case types.REMOVE_QUANTITY: {
      stateCopy = Object.assign({}, previousState);
      return stateCopy;
    }

    default:
      return previousState;
  }
}
