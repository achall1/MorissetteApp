import React, { useState } from 'react';
import '../Styles/header_style.css';
import { Nav, Navbar, Form} from 'react-bootstrap'
import axios from 'axios'
import {API} from "../config";

const signedin = require('../person.png')
const cart =  require('../cart.png')

 //let link = '/account-settings'
let link = ' /account-settings'
// this method is giving me error when i sign out since userAut tokens will be null
// i tried to fix it but double check my logic
/*if( JSON.parse(localStorage.getItem('UserAuth') ) == null ) {
    link = '/admin-menu'
   }*/
if( JSON.parse(localStorage.getItem('UserAuth') ) == null ) {
     link = '/signin'
    }
 else if(JSON.parse(localStorage.getItem('UserAuth')).customer.role == 1){
    link = '/admin-menu'
    
 } else if(JSON.parse(localStorage.getItem('UserAuth')).customer.role == 0){
    link = '/account-settings'
}
else{
    link = '/account-settings'
}

const Header = () => {
    const [signedOut, setSignout] = useState(false);

    const signoutUser = () => {
        localStorage.removeItem('UserAuth')
        axios.get(`${API}/signout`, {

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
                        <Nav.Link href={link}>  <img style={{height: '20px', width: '20px'}} src={signedin} alt="personObj" /> </Nav.Link> :
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