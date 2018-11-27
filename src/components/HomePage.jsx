import React, {Component} from 'React';

export const HomePage = (props) => {
  return (
    <div>
      <button><Link to='/Appetizers'>Appetizers</Link></button>
      <button><Link to='/Makimono'>Makimono</Link></button>
      <button><Link to='/Yakitori'>Yakitori</Link></button>
      <button><Link to='/Tempura'>Tempura</Link></button>
    </div>
  )
}