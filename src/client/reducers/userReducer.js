import * as types from '../constants/actionTypes';

const initialState = {
  name: '',
};

export default (previousState = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case types.GET_USER_AUTH_SUCCESS:
      stateCopy = Object.assign({}, previousState);
      stateCopy.name = action.payload;
      return stateCopy;
    default: 
      return previousState;
  }
}