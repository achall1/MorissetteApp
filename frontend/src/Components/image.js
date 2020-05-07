import React from 'react';
import { Nav, Navbar, Form} from 'react-bootstrap'

const img = require('../person.png');
export const SignedInImage = () => {
    return (
        <div>
            <Nav.Link href="/account-settings">
                <img style={{height: '23px', width: '25px'}} src={img} alt="personObj" />
            </Nav.Link>
        </div>
    )
}

