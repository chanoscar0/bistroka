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
class Appetizers extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts('Appetizers');
  }

  render() {
    console.log(this.props.productList);
    let hotApps = [];
    let coldApps = [];
    this.props.productList.forEach((element) => {
      element.sub_category === 'Hot' ? hotApps.push(element) : coldApps.push(element)
    });
    hotApps = hotApps.map((element) => {
      return (<Item name={element.name}
        price={element.price}
        category={element.category}
        description={element.description}
        key={element.product_id}
        subCategory={element.sub_category}
        index={element.index}
        quantity={element.quantity}
        passObj={element}
      ></Item>)
    })
    coldApps = coldApps.map((element) => {
      return (<Item name={element.name}
        price={element.price}
        category={element.category}
        description={element.description}
        product_id={element.product_id}
        subCategory={element.sub_category}
        index={element.index}
        quantity={element.quantity}
        passObj={element}
      ></Item>)
    })
    return (
      <div>
        <Navigation />
        <h3>Items in cart: {Object.keys(this.props.orderList).length}</h3>
        <button><Link to='/checkout'>Checkout</Link></button>
        <h1>Hot Appetizers</h1>
        {hotApps}
        <br></br>
        <h1>Cold Appetizers</h1>
        {coldApps}

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appetizers);