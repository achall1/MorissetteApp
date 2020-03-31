import React from 'react';
import './App.css';
import Home from './Components/home'
import {  Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import BrowseInventory from './Components/browseInventory';
import CreateAccount from './Components/updateAccount'
import Login from './Components/login'
import Cart from './Components/cart';
import Header from './Components/header'
import SignUp from './Components/signup'
function App() {
  return (
      <div className="App">
        <Header />
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/browse" component={BrowseInventory} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/account_settings" component={CreateAccount} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
