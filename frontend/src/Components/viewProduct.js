import React, { useState, useEffect, Component } from 'react';
import {Link, Redirect } from 'react-router-dom';
import VehicleImage from './vehicleImage';
import VehicleView from './vehicleView';
import BrowseInventory from './browseInventory';
import { Card, Form } from 'react-bootstrap';
import { read,getVehicles } from './fetchvehicles';
import ReactDOM from 'react-dom';
import SingleVehicle from './singleVehicle';
import axios from 'axios';
import '../Styles/editAccount_style.css'
import { addItem, updateItem, removeItem } from './cartHelpers';


const ProductView = props => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState(false);
    const [run, setRun] = useState(false);
    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
            
            }
        });
    };

    const showProduct = product => {
        return(
            <Card>
                <Card.Body>
            <div>
                {product.map((product, i) => (
                    <VehicleView
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        setRun={setRun}
                        run={run}
                      />
                      ))}
               </div>
               </Card.Body>
               </Card>

        );
    };

    return(
        <div className="row">
            <div className="col-6">{showProduct(product)}</div>
            <div products={product} setRun={setRun} run={run} />
            </div>


    )
};
export default ProductView;
