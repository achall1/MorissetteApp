import React from 'react';
import Home from './Components/home'
import {  Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import BrowseInventory from './Components/browseInventory';
import editAccount from './Components/editAccount'
import Login from './Components/signin'
import Cart from './Components/cart';
import Header from './Components/header'
import SignUp from './Components/signup'
import DeliveryStatus from './Components/deliveryStatus';
import AccountSettings from './Components/accountSettings';
import TradeIn from './Components/trade_in';
import PaymentForm from './Components/paymentForm';
import FinanceForm from './Components/financeForm';
import AccountInformation from './Components/AccountInformation'

function App() {
  return (
      <div>
        <Header />
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/browse" component={BrowseInventory} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/account-settings" component={AccountSettings} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/Delivery-Status" component={DeliveryStatus} />
              <Route exact path="/edit-account" component={editAccount} />
              <Route exact path="/Trade-In" component={TradeIn} />
              <Route exact path="/paymentForm" component={PaymentForm} />
              <Route exact path="/financeForm" component={FinanceForm} />
              <Route exact path='/account-information' component={AccountInformation} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
