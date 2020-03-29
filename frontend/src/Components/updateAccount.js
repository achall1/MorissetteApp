import { render } from "react-dom";
import React from 'react'
import {Form, Dropdown, Button} from 'react-bootstrap'
import Header from './header'

class CreateAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            StreetAddress: "",
            State: "",
            CreditCard: "",
            CVV: "",
            ExpirationMonth: "",
            ExpirationYear: "",
            InsuranceCompany: ""
        }
    } 
     onChange(e) {
         console.log(e.target.name);
         console.log(e.target.value)
     }
    //  handleSubmit = (e) => {
    //      e.preventDefault();
    //      alert("Thank you for your update")
    //  }
     render() {
        return (
            <div>
                <Header />
                <Form>
                    <Form.Group className = 'inputs' controlId="formBasicEmail">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className = 'inputs' controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" name="pswd" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className = 'inputs' controlId="formBasicPassword">
                        <Form.Label>Confirm Password: </Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    
    
                    <Form.Group className = 'inputs' controlId="formBasicEmail">
                        <Form.Label>Street Address: </Form.Label>
                        <Form.Control type="text" name="address" />
                    </Form.Group>
    
                    <Dropdown className = 'inputs' >
                        State: 
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select State
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">MD</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">AZ</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">CA</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
    
                    <Form.Group className = 'inputs' controlId="formBasicEmail">
                        <Form.Label>Credit Card #: </Form.Label>
                        <Form.Control type="text"  name="creditcard"/>
                    </Form.Group>
                    <Form.Group className = 'inputs' controlId="formBasicEmail">
                        <Form.Label>CVV: </Form.Label>
                        <Form.Control type="text" name="cvv" />
                    </Form.Group>
                    <Form.Group className = 'inputs' controlId="formBasicEmail">
                        <Form.Label>Expiration Month: </Form.Label>
                        <Form.Control type="text" name="expMonth" />
                    </Form.Group>
    
                    <Form.Group className = 'inputs' controlId="formBasicEmail">
                        <Form.Label>Expiration Year: </Form.Label>
                        <Form.Control type="text" name="expYear" />
                    </Form.Group>
    
                    <Form.Group className = 'inputs' controlId="formBasicEmail">
                        <Form.Label>Insurance Company: </Form.Label>
                        <Form.Control type="text" name="insuCompany" />
                    </Form.Group>
    
                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
            </div>
        );
    }
}
 
 export default CreateAccount;