import React, {Component} from 'React';

class Appetizers extends Component {
  componentDidMount() {
    this.props.grabProductsFromDatabase('Appetizers');
  }
  render() {
    return (
      <div>Hello world</div>
    )
  }
}
export default Appetizers;