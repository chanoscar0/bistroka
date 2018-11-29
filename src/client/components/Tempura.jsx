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
class Tempura extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts('Tempura');
  }

  render() {
    const tempuraProducts = this.props.productList.map(element => {
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
        <h3>Items in cart: {Object.keys(this.props.orderList).length}</h3>
        <button><Link to='/checkout'>Checkout</Link></button>

        <h1>Tempura</h1>
        {tempuraProducts}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tempura);
