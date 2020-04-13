import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
//import axios from 'axios'
import Footer from './footer'
import '../Styles/signup_style.css'

const SignUp = () => {
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const handleSubmit = () => {
        alert("Name: " + userName + " Email" + userEmail + " Password: " + userPassword);
    }
    // const signUpUser = async (e) => {
    //     try{
    //         e.preventDefault();
    //         const response = await axios.post('http://localhost:8000/api/signup', 
    //         {name: userName,email: userEmail, password: userPassword});
    //         console.log("Returned data: ", response)
    //     } catch (e) {
    //         console.log("Axios request failed", e);
    //     }
    // }
    return (
        <div>
            <div className="header">
                    <h2> Sign Up for our services! </h2>
            </div>
            <Form>
                    <Form.Group className="elem">
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter first name" 
                        onChange = { e => setName(e.target.value) }/>
                    </Form.Group>

                    <Form.Group className="elem">
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter last name" 
                        onChange = { e => setName(e.target.value) }/>
                    </Form.Group>
                    
                    <Form.Group className="elem">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control 
                        name="user_email" 
                        type="email" 
                        placeholder="Enter email" 
                        onChange = { e => setEmail(e.target.value) }/>
                    </Form.Group>

                    <Form.Group className="elem">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control 
                        name="user_password" 
                        type="password" 
                        placeholder="Password" 
                        onChange={ e => setPassword(e.target.value) }/>
                    </Form.Group>
                    <Button id= 'submit'variant="primary" type="submit" onClick={handleSubmit}>
                        Sign Up
                    </Button>
            </Form>
            <Footer />
        </div>
    )
}

export default SignUp;