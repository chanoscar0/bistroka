import * as types from '../constants/actionTypes';

export const addQuantity = (index) => ({
  type: types.ADD_QUANTITY,
  payload: index,
});
export const addToCart = object => ({
  type: types.ADD_TO_CART,
  payload: object,
});
export const removeQuantity = (index) => ({
  type: types.REMOVE_QUANTITY,
  payload: index,
});
export const resetQuantity = (index) => ({
  type: types.RESET_QUANTITY,
  payload: index
})
export const addToCartAndResetQuantity = object => {
  return dispatch => {
    dispatch(addToCart(object));
    dispatch(resetQuantity(object.index));
  }
}
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
        let index = 0;
        productArray.forEach(product => {
          product.quantity = 0;
          product.index = index;
          index += 1;
        })
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