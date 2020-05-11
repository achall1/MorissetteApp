import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../Styles/tradeinform_style.css'
import { Form, Button, Col, Row } from 'react-bootstrap'
import Header from './header'
import Footer from './footer'
import axios from 'axios'

const TradeIn = () => {
    //This component will get information from the user to 
    //submit their request to the company for their trade in 
    //vehicle
    const [model, setModel] = useState('')
    const [make, setMake] = useState('')
    const [vin, setVIN] = useState('')
    const [year, setYear] = useState('')
    const [askPrice, setAskPrice] = useState('')
    const [bodyType, setBodyType] = useState('')
    const [pictures, setPictures] = useState(null)
    const [condition, setCondition] = useState('')
    const [mileage, setMileage] = useState('');
    const [feature_specs, setFeatures_specs] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        const _id = JSON.parse(localStorage.getItem('UserAuth')).customer._id;
        const token = JSON.parse(localStorage.getItem("UserAuth")).token;
        formdata.append('model', model)
        formdata.append('make', make)
        formdata.append('vin', vin)
        formdata.append('year', year)
        formdata.append('askingprice', askPrice)
        formdata.append('customer', _id);
        formdata.append('mileage', mileage)
        formdata.append('bodytype', bodyType)
        formdata.append('condition', condition)
        formdata.append('image', pictures)

        let headers = {
            // withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        }

        axios.post(`http://localhost:8000/api/tradein/create/${token}`, formdata, headers)
        .then((res) => {
            setRedirect(true)
        }).catch((err) => console.log(err.response))
    }


    if(redirect) {
        return <Redirect to='/account-settings' />
    }

    return (
        <div>
            <Header />
                <div style={{textAlign: 'center', overflow: 'auto', height: '49rem'}}>
                <h2 id="header">Trade-In Form</h2>
                <Form encType="multipart/form-data" name="formelem" onSubmit={submitForm}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Model:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setModel(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Make
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setMake(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        VIN:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setVIN(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Year:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setYear(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Ask Price:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setAskPrice(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Body Type:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setBodyType(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Pictures of Vehicle: 
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control  type="file" onChange={(e) => setPictures(e.target.files[0])} />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Condition of Vehicle:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setCondition(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Miles on Vehicle:
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setMileage(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                        Features and Specs
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control required='required' type="text" onChange={(e) => setFeatures_specs(e.target.value)}/>
                        </Col>
                    </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form>
                </div>
            <Footer />
        </div>
    )
}

export default TradeIn;