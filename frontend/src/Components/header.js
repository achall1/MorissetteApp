import React from 'react';
import {  Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import '../Styles/header_styles.css';
import Home from './home';
import BrowseInventory from './browseInventory';
import CreateAccount from './updateAccount'
import Login from './login'
import Cart from './cart';
// This file represents the header section of the web page 
// which will always be present. We must alter the header based on 
// the condition of them being signed in as a registered customer or not
const Header = () => {
    return (
        <Router>
            <div> 
                <ul id='navBar'>
                    <li className="listElem"><Link to="/">Home</Link></li>
                    <li className="listElem" ><Link to='/browse'>Browse</Link></li>
                    <li className="listElem" ><Link to='/cart'>Cart</Link></li>
                    <li className="listElem" ><Link to="/account_settings">Account Settings</Link></li>
                    <li className="listElem" ><Link to="/signin">Sign in</Link></li>
                </ul>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/browse">
                        <BrowseInventory />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/account_settings" >
                        <CreateAccount />
                    </Route>
                    <Route path="/signin">
                        <Login />
                    </Route>
                </Switch>
                {/* //Currently does not work */}
            </div>
         </Router>
    )

    
}

export default Header;