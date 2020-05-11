import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Button, Col, Row } from 'react-bootstrap'
import Header from '../header'
import Footer from '../footer'
import axios from 'axios'

const UpdateVehicleInventory = () => {


    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [vin, setVIN] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [bodyType, setBodyType] = useState('');
    const [pictures, setPictures] = useState(null);
    const [miles, setMiles] = useState('');
    const [featuresandSpecs, setFeaturesandSpecs] = useState('');
    const [color, setColor] = useState('');
    const [carCount, setCarCount] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submitForm = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append('make', make);
        formdata.append('model', model);
        formdata.append('vin', vin);
        formdata.append('year', year);
        formdata.append('price', price);
        formdata.append('bodytype', bodyType);
        formdata.append('image', pictures);
        formdata.append('mileage', miles);
        formdata.append('color', color)
        formdata.append('inventoryCount', carCount)

        const _id = JSON.parse(localStorage.getItem('UserAuth')).customer._id
        const token = JSON.parse(localStorage.getItem('UserAuth')).token
        let headers = {
            // withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        }

        axios.post(`http://localhost:8000/api/vehicle/create/${_id}`, formdata, headers)
        .then((res) => {
            console.log(res.data);
            setRedirect(true);
        })
        .catch((err) => console.log(err));
    }

    if(redirect) return <Redirect to='/admin-menu' />
    return  (
        <div>
            <Header />
                <div style={{textAlign: 'center', overflow: 'auto', height: '53rem'}}>
                    <h2 id="header">Update Inventory</h2>
                    <Form encType="multipart/form-data" name="formelem" onSubmit={submitForm}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Make:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control required='required' type="text" onChange={(e) => setMake(e.target.value)} />
                            </Col>
                        </Form.Group>

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
                            Color:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control required='required' type="text" onChange={(e) => setColor(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Count:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control required='required' type="text" onChange={(e) => setCarCount(e.target.value)} />
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
                            Price:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control required='required' type="text" onChange={(e) => setPrice(e.target.value)} />
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
                            <Form.Control required='required' type="file" onChange={(e) => setPictures(e.target.files[0])} />
                            </Col>
                        </Form.Group>

                        {/* <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Condition of Vehicle:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control required='required' type="text" onChange={(e) => setCondition(e.target.value)} />
                            </Col>
                        </Form.Group> */}

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Miles on Vehicle:
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control required='required' type="text" onChange={(e) => setMiles(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                            Features and Specs
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control required='required' type="text" onChange={(e) => setFeaturesandSpecs(e.target.value)}/>
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

export default UpdateVehicleInventory;