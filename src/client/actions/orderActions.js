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
