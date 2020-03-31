import React , {useState } from 'react';
import { Form, Button  } from 'react-bootstrap';
import '../Styles/login_style.css';
import  axios  from 'axios';
import { Link, Route } from 'react-router-dom'


const Login  = () => {
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const signIn = (email, password) => {
        //This function will send a request through Axios to the backend route
        //check if the user is in the database

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting form with ${userEmail} and ${userPassword}`);
    }

    const sendLogin = async (e) => {
        try{
            e.preventDefault();
            const response = await axios.post('http://localhost:8000/api/signin', 
            {email: userEmail, password: userPassword});
            console.log("Returned data: ", response)
        } catch (e) {
            console.log("Axios request failed", e);
        }
    }
    
    return (
        <div className='main'>
             <Route>
                <Form className = 'inputForm'>
                        <Form.Label 
                        style={{marginLeft: '70%'}}
                        Link to={"/signup"}>Sign up</Form.Label> <br></br>
                        <Form.Label style={{textAlign: 'center'}}>Sign in</Form.Label>
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
                        <Button id= 'submit'variant="primary" type="submit" onClick={sendLogin}>
                            Submit
                        </Button>
                </Form>
             </Route>
        </div>
    )
}

export default Login;

