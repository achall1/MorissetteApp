import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
const DeliveryStatus = () => {
    //LEAVE THIS FILE BE FOR NOW
    //This component is modal and will be rendered
    //whenever the user clicks the delivery status request button

    //We will also need a function that will
    //Grab the delivery status from the database
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

  return (
        <div>
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
    );
}

export default DeliveryStatus