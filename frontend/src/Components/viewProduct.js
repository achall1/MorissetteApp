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
        const productId = props.location.data
        loadSingleProduct(productId);
        
    }, [props]);

    const [redirect, setRedirect] = useState(false);

    const showAddToCartButton = true

        const shouldRedirect = redirect => {
      if (redirect) {
        return <Redirect to="/cart" />;
      }
    };

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

     const addToCart = () => {
      // console.log('added');
      addItem(product, setRedirect(true));
    };

    const showAddToCartBtn = showAddToCartButton => {
      return (
        showAddToCartButton && (
          <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
            Add to cart
          </button>
        )
      );
    };

    return(


          <div className="productView ">
          <Card>
            {shouldRedirect(redirect)}
            <Card.Img variant="top" src={`http://localhost:8000/api/vehicle/picture/${props.location.data}`} />
            <Card.Body>
              <Card.Text>
                <p>
                                {`${props.location.model} •  ${props.location.mileage}K miles`}
                </p>
                <p>
                   {` $${props.location.price}`}
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
                    <br />

                     {showAddToCartBtn(showAddToCartButton)}
          </div>



    )
};
export default ProductView;
