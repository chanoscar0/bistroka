import React, { Component } from 'React';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Item from './Item.jsx';
import Navigation from './navigation/navigation.jsx';
import { Link } from 'react-router-dom';

const mapStateToProps = store => {
  return {
    productList: store.productReducer.productList,
    orderList: store.orderReducer.orderList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: (category) => {
      dispatch(actions.getProducts(category));
    }
  }
}
class Yakitori extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts('Yakitori');
  }

  render() {
    const yakitoriProducts = this.props.productList.map(element => {
      return ( <Item name = {element.name} 
        price = {element.price} 
        category = {element.category} 
        description = {element.description}
        key = {element.product_id}
        subCategory = {element.sub_category}
        index = {element.index}
        quantity = {element.quantity}
        passObj = {element}
        ></Item>)
    })
    return (
      <div>
        <Navigation/>
<<<<<<< HEAD
        <h3>Items in cart: {Object.keys(this.props.orderList).length}</h3>
        <button><Link to='/checkout'>Checkout</Link></button>

||||||| merged common ancestors
=======
        <button><Link to='/checkout'>Checkout</Link></button>
>>>>>>> 4fa98bcc13396e2e2448384a9576ab82d911cf01
        <h1>Yakitori</h1>
        {yakitoriProducts}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Yakitori);
