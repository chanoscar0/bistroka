import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/orderActions';

const mapDispatchToProps = dispatch => {
  return {
    resetProducts: () => {
      dispatch(actions.resetProducts());
    }
  }
}

const Navigation = (props) => {
  return (
    <div>
      <button onClick={() => props.resetProducts()}><NavLink to='/'>Home</NavLink></button>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Navigation);


