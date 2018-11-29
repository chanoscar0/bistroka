import { combineReducers } from 'redux';
import orderReducer from '../reducers/orderReducer';
import productReducer from '../reducers/productReducer';

const reducers = combineReducers({
  orderReducer,
  productReducer,
});

export default reducers;