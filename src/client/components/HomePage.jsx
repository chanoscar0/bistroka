import React, {Component} from 'React';
import {Link} from 'react-router-dom';
class HomePage extends Component {
  constructor(){
    super();
  }
componentDidMount(){
  
    fetch('http://localhost:3000/auth/facebook', {
      headers: {'Content-Type': 'application/json'},
      mode:'no-cors',
    })
    .then(res => {      
      // console.log('res',res)
    })
    .catch((error) => {
      console.log(error);
    })
  
}
  render(){

    return (
      <div>
        <a href="http://localhost:3000/auth/facebook">log in</a>
        <button><Link to='/Appetizers'>Appetizers</Link></button>
        <button><Link to='/Makimono'>Makimono</Link></button>
        <button><Link to='/Yakitori'>Yakitori</Link></button>
        <button><Link to='/Tempura'>Tempura</Link></button>
      </div>
    )
  }
}
export default HomePage;