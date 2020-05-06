import React , {useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../Styles/signin_style.css';
import  axios  from 'axios';
import { Route, Link } from 'react-router-dom'
import Footer from './footer'


const Login  = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const sendLogin = async (e) => {
        //This function will send a request through Axios to the backend route
        //check if the user is in the database
        console.log("Email: ", userEmail);
        console.log("Password: ", userPassword);

        e.preventDefault();
        axios.post('http://localhost:8000/api/signin', 
        {
            "email": userEmail,
            "password": userPassword
        })
        // You can get the information from the local storage by using JSON.parse()
        // then you pass in the localStorage.getItem('UserAuth') and then the
        // properties of the object
        .then((res) => {
            if(res.status === 200){
                console.log("Successfully signed in and authenticated");
                localStorage.setItem('UserAuth', JSON.stringify(res.data));
                setShow(false)
            }else if(res.status === 400){
            }
        })
        .catch(err =>   setShow(true));
    }
    return (
        <div>
             <Route>
                 <div className="header">
                    <h2>Sign into your account!</h2>
                 </div>
                <Form>
                        <Form.Group className="elem" as={Row}>
                            <Form.Label column sm={2}>Email </Form.Label>
                            <Col sm={5}>
                            <Form.Control 
                            name="username" 
                            type="text" 
                            placeholder="Enter email" 
                            onChange = { e => setUserEmail(e.target.value) }/>
                            </Col>
                        </Form.Group>
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
                        {show ?
                            <p style={{ color: 'red'}}> The email or password you entered was incorrect! </p>
                            :
                            null
                        }
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

