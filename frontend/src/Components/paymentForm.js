import React from 'react'
//import '../Styles/paymentForm_style.css'
import { Form, Button, Col, Row } from 'react-bootstrap'

const PaymentForm = () => {
    return (
        <div>
            <Form onSubmit={() => {alert('Checkout Successful');}}
            >
                <h2 id="header">Payment Form</h2>
                <h4>Billing Address</h4>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Full Name:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Email:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Address:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        City:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        State:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Zip Code:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <h4>Card Information</h4>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Name on Card:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Card Number:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Exp. Month:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Exp. Year:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        CVV:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default PaymentForm;