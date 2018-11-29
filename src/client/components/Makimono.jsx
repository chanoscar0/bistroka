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
class Makimono extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts('Makimono');
  }

  render() {
    let freshRolls = [];
    let bakedRolls = [];
    let tempuraRolls = [];
    this.props.productList.forEach(element => {
      if(element.sub_category === 'Tempura Rolls') {
        tempuraRolls.push(element);
      } else if (element.sub_category === 'Fresh Rolls') {
        freshRolls.push(element);
      } else {
        bakedRolls.push(element);
      }
    })
    freshRolls = freshRolls.map((element) => {
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
    bakedRolls = bakedRolls.map((element) => {
      return ( <Item name = {element.name} 
        price = {element.price} 
        category = {element.category} 
        description = {element.description}
        product_id = {element.product_id}
        subCategory = {element.sub_category}
        index = {element.index}
        quantity = {element.quantity}
        passObj = {element}
        ></Item>)
    })
    tempuraRolls = tempuraRolls.map((element) => {
      return ( <Item name = {element.name} 
        price = {element.price} 
        category = {element.category} 
        description = {element.description}
        product_id = {element.product_id}
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

        <h1>Makimono</h1>
        <h2>Tempura Rolls</h2>
        {tempuraRolls}
        <h2>Baked Rolls</h2>
        {bakedRolls}
        <h2>Fresh Rolls</h2>
        {freshRolls}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Makimono);
