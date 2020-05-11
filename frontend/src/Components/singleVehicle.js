import React, { useState, useEffect } from 'react';
import VehicleView from './vehicleView';
import { read,getVehicles } from './fetchvehicles';
import {API} from "../config";


const SingleVehicle = props => {

    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);

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

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (

            <div className="vehicleView ">
          <Card>
            {shouldRedirect(redirect)}
            <Card.Img variant="top" src={`${API}/vehicle/picture/${product._id}`} />
            <Card.Body>
              <Card.Text>
                <p>
                  {`${product.model.substring(0, 100)} •  ${product.mileage}K miles`}
                </p>
                <p>
                  {` $${product.price}`}
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
       </div>
    );
};

export default SingleVehicle;
