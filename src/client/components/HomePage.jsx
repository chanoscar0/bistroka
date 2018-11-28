import React, {Component} from 'React';
import {Link} from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div>
      <button><Link to='/Appetizers'>Appetizers</Link></button>
      <button><Link to='/Makimono'>Makimono</Link></button>
      <button><Link to='/Yakitori'>Yakitori</Link></button>
      <button><Link to='/Tempura'>Tempura</Link></button>
    </div>
  )
}
export default HomePage;