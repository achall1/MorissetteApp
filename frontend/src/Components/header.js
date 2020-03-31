import React from 'react';
import {  Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import '../Styles/header_styles.css';
import Home from './home';
import BrowseInventory from './browseInventory';
import UpdateAccount from './updateAccount'
import Login from './login'
import Cart from './cart';
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'
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
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/browse">Features</Nav.Link>
                <Nav.Link href="/account_settings">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
          </Navbar>
    )

    
}

export default Header;