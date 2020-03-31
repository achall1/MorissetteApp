import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import '../Styles/login_style.css'

const SignUp = () => {
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const handleSubmit = () => {
        alert("Name: " + userName + " Email" + userEmail + " Password: " + userPassword);
    }
    const signUpUser = async (e) => {
        try{
            e.preventDefault();
            const response = await axios.post('http://localhost:8000/api/signup', 
            {name: userName,email: userEmail, password: userPassword});
            console.log("Returned data: ", response)
        } catch (e) {
            console.log("Axios request failed", e);
        }
    }
    return (
        <div class="main">
            <Form className = 'inputForm'>
                    <Form.Group id = 'email' controlId="formBasicEmail">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control 
                       
                        type="text" 
                        placeholder="Enter name" 
                        onChange = { e => setName(e.target.value) }/>
                    </Form.Group>
                    
                    <Form.Group id = 'email' controlId="formBasicEmail">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control 
                        name="user_email" 
                        type="email" 
                        placeholder="Enter email" 
                        onChange = { e => setEmail(e.target.value) }/>
                    </Form.Group>

                    <Form.Group id='password' controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control 
                        name="user_password" 
                        type="password" 
                        placeholder="Password" 
                        onChange={ e => setPassword(e.target.value) }/>
                    </Form.Group>
                    <Button id= 'submit'variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
            </Form>
        </div>
    )
}

export default SignUp;