import React from 'react';
import Footer from './footer'
import { Nav } from 'react-bootstrap'
import '../Styles/account_settings_styles.css' 

const AccountSettings = () => {
    return (
        <div>
            <div>
                <h1 className="header">Account Settings</h1>
            </div>
            <div>
                <ul id="list">
                    <li className="listelem">
                        <Nav.Link className="content" href="/Delivery-Status">Request Delivery Status</Nav.Link>
                    </li>
                    <li className="listelem">
                        <Nav.Link className="content" href="/edit-account">Edit your account</Nav.Link>
                    </li>
                    <li className="listelem">
                        <Nav.Link className="content" href="/Trade-In">Trade-In Vehicle</Nav.Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default AccountSettings;