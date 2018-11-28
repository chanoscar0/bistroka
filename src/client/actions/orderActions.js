import * as types from '../constants/actionTypes';

export const addQuantity = event => ({
  type: types.ADD_QUANTITY,
  payload: event,
});

export const addToCart = object => ({
  type: types.ADD_TO_CART,
  payload: object,
});

export const removeQuantity = event => ({
  type: types.REMOVE_QUANTITY,
  payload: event,
});

export const resetProducts = () => ({
  type: types.RESET_PRODUCTS
});


// Redux-Thunk Asynchronous

export const getProducts = (category) => {
  return function (dispatch) {
    const fetchURL = 'http://localhost:3000/' + category;
    return fetch((fetchURL), {
      headers: { "Content-Type": "application/json" }
    })
      .then(data => data.json())
      .then(productArray => {
        dispatch(getProductsSuccess(productArray));
      })
      .catch(error => dispatch(getProductsFailure(error)));
  }
}

export const getProductsFailure = error => ({
  type: types.GET_PRODUCTS_FAILURE,
  payload: error,
});

export const getProductsSuccess = data => ({
  type: types.GET_PRODUCTS_SUCCESS,
  payload: data,
});