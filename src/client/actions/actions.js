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

export const resetQuantity = (index) => ({
  type: types.RESET_QUANTITY,
  payload: index
 });

 export const addToCartAndResetQuantity = object => {
  return dispatch => {
    dispatch(addToCart(object));
  }
 };


 // Remove Item from Order Summary Component
 export const removeItem = (name) => ({
   type: types.REMOVE_ITEM,
   payload: name
 })


// Redux-Thunk Asynchronous

export const getProducts = (category) => {
  return function (dispatch) {
    const fetchURL = 'http://localhost:3000/' + category;
    return fetch((fetchURL), {
      headers: { "Content-Type": "application/json" }
    })
      .then(data => data.json())
      .then(productArray => {
        let index = 0;
        productArray.forEach(product => {
          product.quantity = 0;
          product.index = index;
          index += 1;
        });
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

export const checkout = (object) => {
  return function (dispatch){
    return fetch('http://localhost:3000/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object),
    })
    .then((data) => data.json())
    .then((data) => dispatch(checkoutSuccess(data)))
    .catch((error) => dispatch(checkoutFailure(error)))
  }
}

export const checkoutFailure = error => ({
  type: types.CHECKOUT_FAILURE,
  payload: error,
});

export const checkoutSuccess = data => ({
  type: types.CHECKOUT_SUCCESS,
  payload: data,
});