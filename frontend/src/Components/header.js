import React from 'react';
import '../Styles/header_style.css';
import { Nav, Navbar, Form} from 'react-bootstrap'
import { SignedInImage } from './image.js'
const signedin = require('../person.png')
const cart =  require('../cart.png')
const Header = () => {
    return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Morisette</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/browse">Browse</Nav.Link>
                <Nav.Link href="/cart"><img style={{height: '20px', width: '20px'}} src={cart} alt="cartObj" /></Nav.Link>
                    {
                        localStorage.getItem('UserAuth') ?
                        <Nav.Link href='/account-settings'>  <img style={{height: '20px', width: '20px'}} src={signedin} alt="personObj" /> </Nav.Link> :
                        <Nav.Link href="/signin"> Signin </Nav.Link>
                    }               
                </Nav>
                <Form inline>
                </Form>
          </Navbar>
    )
}

export default Header;