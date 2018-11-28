import React, { Component } from 'React';
import { connect } from 'react-redux';
import * as actions from '../actions/orderActions';
import Navigation from '../components/navigation/navigation';


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
class Makimono extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts('Makimono');
  }

  render() {
    const productName = this.props.productList.map((element) => {
      return <li>{element.name}</li>
    })

    return (
      <div>
        <Navigation />
        <div>{productName}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Makimono);