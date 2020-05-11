import React from 'react'
import Header from  './header'
import Footer from './footer'
import { Form, Button, Col, Row } from 'react-bootstrap'

const FinanceForm = () => {
    return (
        <div>
            <Header />
            <Form onSubmit={() => { alert('Form Submitted'); }}
            >
                <h2 id="header">Financing</h2>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Occupation:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Employer's Name:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Annual Income:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Date of Birth:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required placeholder="MMDDYY" type="text" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Last four digits of SSN:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Credit Score:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control as="select">
                            <option>Exceptional (850-800)</option>
                            <option>Very Good (799-740)</option>
                            <option>Good (739-670)</option>
                            <option>Fair (669-580)</option>
                            <option>Poor (579-300)</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                        Down Payment:
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control required type="text" placeholder="$"/>
                    </Col>
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
            <Footer />
        </div>
    )
}

export default FinanceForm;