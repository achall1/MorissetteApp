import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Footer from './footer'
import '../Styles/signup_style.css'

const SignUp = () => {
    const [userFirstName, setFirstName] = useState("");
    const [userLastName, setLastName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const signUpUser = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/signup', 
            {
                "first_name": userFirstName,
                "last_name": userLastName,
                "email": userEmail,
                "password": userPassword
            })
            .then( () => console.log("User signed up"))
            .catch( err => console.log("Axios request failed", err));
    }

    return (
        <div>
            <div className="header">
                    <h2> Sign Up for our services! </h2>
            </div>
            <Form>
                    <Form.Group className="elem" as={Row}>
                            <Form.Label column sm={2}>First Name:  </Form.Label>
                            <Col sm={5}>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter first name" 
                            onChange = { e => setFirstName(e.target.value) }/>
                            </Col>
                    </Form.Group>

                    <Form.Group className="elem" as={Row}>
                            <Form.Label column sm={2}>Last Name:  </Form.Label>
                            <Col sm={5}>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter last name" 
                            onChange = { e => setLastName(e.target.value) }/>
                            </Col>
                    </Form.Group>

                    <Form.Group className="elem" as={Row}>
                            <Form.Label column sm={2}>Email Address:  </Form.Label>
                            <Col sm={5}>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter email address" 
                            onChange = { e => setEmail(e.target.value) }/>
                            </Col>
                    </Form.Group>
                    
                    <Form.Group className="elem" as={Row}>
                            <Form.Label column sm={2}>Password:  </Form.Label>
                            <Col sm={5}>
                            <Form.Control 
                            type="password" 
                            placeholder="Enter password" 
                            onChange = { e => setPassword(e.target.value) }/>
                            </Col>
                    </Form.Group>

                    <Button id= 'submit'variant="primary" type="submit" onClick={signUpUser}>
                        Sign Up
                    </Button>
            </Form>
            <Footer />
        </div>
    )
}

export default SignUp;