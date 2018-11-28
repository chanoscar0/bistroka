import React, { Component } from 'React';
import { connect } from 'react-redux';
import * as actions from '../actions/orderActions';

const mapStateToProps = store => {
  return {
    productList: store.product.products
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
    const productName = this.props.productList.map((element) => {
      return <li>{element.name}</li>
    })

    return (
      <div>{productName}</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tempura);