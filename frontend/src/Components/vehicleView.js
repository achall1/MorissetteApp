import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import VehicleImage from './vehicleImage';
import { Card } from 'react-bootstrap'
const VehicleView = ({
    product,
    showViewProductButton = true,
    setRun = f => f,
    run = undefined
    // changeCartSize
  }) => {
    //const [redirect, setRedirect] = useState(false);
    
    const showViewButton = showViewProductButton => {
        return (
          showViewProductButton && (
            <Link to={`http://localhost:8000/api/vehicle/${product._id}`} className="mr-2">
              <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Car</button>
            </Link>
          )
        );
      };
      const showStock = quantity => {
        return quantity > 0 ? (
          <span className="badge badge-primary badge-pill">In Stock </span>
        ) : (
          <span className="badge badge-primary badge-pill">Out of Stock </span>
        );
      };
      return (
          
        <div className="vehicleView ">
          <Card>
            <Card.Img variant="top" src={`http://localhost:8000/api/vehicle/picture/${product._id}`} />
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

            {showStock(product.invintoryCount)}
            <br />
    
            {showViewButton(showViewProductButton)}

          {/* </div> */}
        </div>
      );
    };
    
    export default VehicleView;
    