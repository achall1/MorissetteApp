import React from 'react'
import '../Styles/tradeinform_style.css'
import { Form, Button, Col, Row } from 'react-bootstrap'
const TradeIn = () => {
    //This component will get information from the user to 
    //submit their request to the company for their trade in 
    //vehicle
    return (
        <div>
            <h2 id="header">Trade-In Form</h2>
            <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Name of Vehicle:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Brand:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                VIN:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Year:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Model:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Ask Price:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Body Type:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Pictures of Vehicle: 
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>


            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Condition of Vehicle:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Miles on Vehicle:
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                Features and Specs
                </Form.Label>
                <Col sm={9}>
                <Form.Control type="text" />
                </Col>
            </Form.Group>
    
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default TradeIn;