import React, {Component} from 'React';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Appetizers from './Appetizers.jsx';
import Tempura from './Tempura.jsx';
import Yakitori from './Yakitori.jsx';
import Makimono from './Makimono.jsx';

class App extends Component {
  render() {
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component = {HomePage}/>
        <Route exact path='/Appetizers' component = {Appetizers}/>
        <Route exact path='/Tempura' component = {Tempura}/>
        <Route exact path='/Yakitori' component = {Yakitori}/>
        <Route exact path='/Makimono' component = {Makimono}/>
      </Switch>
    </BrowserRouter>
  }
}
export default App;