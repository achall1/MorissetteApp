import React from 'react';
import '../Styles/header_style.css';
import { Nav, Navbar, Form} from 'react-bootstrap'
const Header = () => {
    return (
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