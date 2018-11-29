import { combineReducers } from 'redux';
import orderItemReducer from '../reducers/orderItemReducer';
import orderReducer from '../reducers/orderReducer';
import productReducer from '../reducers/productReducer';

const reducers = combineReducers({
  orderItemReducer,
  orderReducer,
  productReducer,
});

export default reducers;