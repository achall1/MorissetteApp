import React, { useState } from 'react';
import Footer from './footer'
import Header from './header'
import { Nav } from 'react-bootstrap'
import '../Styles/account_settings_styles.css' 
import { Modal, Button } from 'react-bootstrap'

const AccountSettings = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <div style={{textAlign: 'center'}}>
            <Header />
            <div>
                <h1 className="header">Account Settings</h1>
            </div>
            <div>
                <ul id="list">
                    <li className="listelem">
                        <Nav.Link className="content" onClick={() => setShow(true)}>Request Delivery Status</Nav.Link>
                    </li>
                    <li className="listelem">
                        <Nav.Link className="content" href="/account-information">View your account</Nav.Link>
                    </li>
                    <li className="listelem">
                        <Nav.Link className="content" href="/Trade-In">Trade-In Vehicle</Nav.Link>
                    </li>
                </ul>

                {/* //This is the modal for the registered user to see when they click 
                //Check delivery status */}
                <Modal show={show} onHide={handleClose} style={{ marginTop: "50px"}}>
                    <Modal.Header closeButton>
                    <Modal.Title>Vehicle Delivery Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your vehicle is en route to your destination!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Footer />
        </div>
    )
}

export default AccountSettings;