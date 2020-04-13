import React from 'react';
// import {  Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
// import Home from './home';
// import BrowseInventory from './browseInventory';
// import UpdateAccount from './editAccount'
// import Login from './login'
// import Cart from './cart';
import '../Styles/header_style.css';
import { Nav, Navbar, Form} from 'react-bootstrap'
// This file represents the header section of the web page 
// which will always be present. We must alter the header based on 
// the condition of them being signed in as a registered customer or not
const Header = () => {
    return (
            // <Router>
            //     <div> 
            //         <ul id='navBar'>
            //             <li className="listElem"><Link to="/">Home</Link></li>
            //             <li className="listElem" ><Link to='/browse'>Browse</Link></li>
            //             <li className="listElem" ><Link to='/cart'>Cart</Link></li>
            //             <li className="listElem" ><Link to="/account_settings">Account Settings</Link></li>
            //             <li className="listElem" ><Link to="/signin">Sign in</Link></li>
            //         </ul>
            //     </div>
            // </Router>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Morisette</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/browse">Browse</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
                <Nav.Link href="/account-settings">Account Settings</Nav.Link>
                <Nav.Link href="/signin">Sign In</Nav.Link>
                </Nav>
                <Form inline>
                </Form>
          </Navbar>
    )

    
}

export default Header;