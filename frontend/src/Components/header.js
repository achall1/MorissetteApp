import React, { useState } from 'react';
import '../Styles/header_style.css';
import { Nav, Navbar, Form} from 'react-bootstrap'
import { SignedInImage } from './image.js'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
const signedin = require('../person.png')
const cart =  require('../cart.png')

const Header = () => {
    const [signedOut, setSignout] = useState(false);

    const signoutUser = () => {
        localStorage.removeItem('UserAuth')
        axios.get('http://localhost:8000/api/signout', {

        }).then((res) => {
            if(res.status === 200){
                console.log(res.data);
                setSignout(true);
            }
        }).catch(err => console.log(err))
    }

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

                    {
                        localStorage.getItem('UserAuth') ?
                        <div onClick={signoutUser}>
                            <Nav.Link href='/'>Signout</Nav.Link>
                        </div> :
                         null
                    }                            
                </Nav>
                <Form inline>
                </Form>
          </Navbar>
    )
}

export default Header;