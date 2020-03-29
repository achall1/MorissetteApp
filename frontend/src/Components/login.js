import React , {useState } from 'react';
import { Card, Form, Button  } from 'react-bootstrap';
import '../Styles/login_style.css'
import Header from './header'

const Login  = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (email, password) => {
        //This function will send a request through Axios to the backend route
        //check if the user is in the database
    }

    
    return (
        <div className='main'>
            <Header />
             <Form className = 'inputForm'>
                    <Form.Label style={{marginLeft: '70%'}}>Sign up</Form.Label> <br></br>
                    <Form.Label style={{textAlign: 'center'}}>Sign in</Form.Label>
                    <Form.Group id = 'email' controlId="formBasicEmail">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control name="user_email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group id='password' controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control name="user_password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button id= 'submit'variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>
    )
}

export default Login;

