import React , {useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../Styles/signin_style.css';
import  axios  from 'axios';
import { Route, Link } from 'react-router-dom'
import Footer from './footer'


const Login  = () => {
    const [username, setUsername] = useState("");
    const [userPassword, setPassword] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`Submitting form with ${userEmail} and ${userPassword}`);
    // }

    const sendLogin = async (e) => {
        //This function will send a request through Axios to the backend route
        //check if the user is in the database
        try{
            e.preventDefault();
            const response = await axios.post('http://localhost:8000/api/signin', 
            {email: username, password: userPassword});
            console.log("Returned data: ", response)
        } catch (e) {
            console.log("Axios request failed", e);
        }
    }
    return (
        <div>
             <Route>
                 <div className="header">
                    <h2>Sign into your account!</h2>
                 </div>
                <Form>
                        <Form.Group className="elem" as={Row} controlId="formBasicEmail">
                            <Form.Label column sm={2}>Username </Form.Label>
                            <Col sm={5}>
                            <Form.Control 
                            name="username" 
                            type="text" 
                            placeholder="Enter username" 
                            onChange = { e => setUsername(e.target.value) }/>
                            </Col>
                        </Form.Group>


                        {/* <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group> */}


                        <br></br>
                        <Form.Group className="elem" as={Row} controlId="formBasicPassword">
                            <Form.Label column sm={2}>Password: </Form.Label>
                            <Col sm={5}>
                            <Form.Control 
                            name="user_password" 
                            type="password" 
                            placeholder="Password" 
                            onChange={ e => setPassword(e.target.value) }/>
                            </Col>
                        </Form.Group>

                        <Button 
                        className="elem" 
                        variant="primary" 
                        type="submit" 
                        onClick={sendLogin}>
                            Sign In
                        </Button>
                        <br></br>
                        <Form.Label className="elem"> If you do not have an account sign up!</Form.Label>
                        <br></br>
                        <Link to="/signup"> Sign up</Link>
                </Form>
                <Footer />
             </Route>
        </div>
    )
}

export default Login;

