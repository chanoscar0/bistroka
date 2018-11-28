import { combineReducers } from 'redux';
import orderItemReducer from '../reducers/orderItemReducer';
import orderReducer from '../reducers/orderReducer';

const reducers = combineReducers({
  orderItemReducer,
  orderReducer,
});

export default reducers;