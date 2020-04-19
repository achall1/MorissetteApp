import React from 'react'
import {Form, Col, Button, Row} from 'react-bootstrap'
import Footer from './footer';
import '../Styles/editAccount_style.css'

class editAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           firstName: '',
           lastName:'',
           currentEmail:'',
           email: '',
           streetAddress:'',
           DOB: '',
           state: '',
           city: '',
           zip: '',
           creditcard: '',
           cvv: '',
           expirationDate: '',
           autoInsurer: '',
           SSN:''

        }
    } 
     handleOnChange(e) {
        [e.target.name] = e.target.value
     }
     handleSubmit = (e) => {
         e.preventDefault();
         alert("Thank you for your update")
     }
     render() {
        return (
                <div>
                    <h2 className="editAccountHeader">Edit Your Account</h2>
                    <Form className="editAccountForm">
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        First Name:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control name="firstName" type="text" onChange={this.handleOnChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Last Name: 
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control name="lastName" onChange={this.handleOnChange} type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Email Address: 
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control name="email" onChange={this.handleOnChange} type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Street Address:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control name="streetAddress" onChange={this.handleOnChange} type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Date of Birth: 
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control name="DOB" onChange={this.handleOnChange} type="text" />
                        </Col>
                    </Form.Group>
                        <Form.Group as={Row} controlId="formGridState">
                        <Form.Label column sm={2}>State</Form.Label>
                        <Col sm={9}>
                        <Form.Control name="state" onChange={this.handleOnChange} as="select" value={this.state.state.value}>
                            <option>Choose...</option>
                            <option>AL</option>
                            <option>AK</option>
                            <option>AZ</option>
                            <option>AR</option>
                            <option>CA</option>
                            <option>CO</option>
                            <option>CT</option>
                            <option>DE</option>
                            <option>FL</option>
                            <option>GA</option>
                            <option>HI</option>
                            <option>ID</option>
                            <option>IL</option>
                            <option>IN</option>
                            <option>IA</option>
                            <option>KS</option>
                            <option>KY</option>
                            <option>LA</option>
                            <option>ME</option>
                            <option>MD</option>
                            <option>MA</option>
                            <option>MI</option>
                            <option>MN</option>
                            <option>MS</option>
                            <option>MO</option>
                            <option>MT</option>
                            <option>NE</option>
                            <option>NV</option>
                            <option>NH</option>
                            <option>NJ</option>
                            <option>NC</option>
                            <option>ND</option>
                            <option>OH</option>
                            <option>OK</option>
                            <option>OR</option>
                            <option>PA</option>
                            <option>RI</option>
                            <option>SC</option>
                            <option>SD</option>
                            <option>TN</option>
                            <option>TX</option>
                            <option>UT</option>
                            <option>VT</option>
                            <option>VA</option>
                            <option>WA</option>
                            <option>WV</option>
                            <option>WI</option>
                            <option>WY</option>
                        </Form.Control>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            City
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control name="city" onChange={this.handleOnChange} type="text" />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Zip
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control name="zipcode" onChange={this.handleOnChange} type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Credit Card #:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control name="creditcard" onChange={this.handleOnChange} type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            CVV:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control name="cvv" onChange={this.handleOnChange} type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Expiration Date: 
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control name="expirationDate" onChange={this.handleOnChange} type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Auto Insurer:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control name="autoInsurer" onChange={this.handleOnChange} type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Last 4 digits of SSN:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control name="SSN" onChange={this.handleOnChange} type="text" />
                            </Col>
                        </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Update Account
                    </Button>
                </Form>
                <Footer />
            </div>
        );
    }
}
 
 export default editAccount;