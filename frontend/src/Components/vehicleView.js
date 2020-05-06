import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import VehicleImage from './vehicleImage';

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
            <Link to={`${product._id}`} className="mr-2">
              <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
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
          <div className="vehicleView-header card-header-1 ">{product.make}</div>
          <div className="vehicleView-body">
          
            <VehicleImage item={product} />
            <p className="card-p  mt-2">{product.model.substring(0, 100)} </p>
            <p className="card-p black-10">$ {product.price}</p>
            <p className="black-9">mileage: {product.milage}</p>
            <p className="black-8">Added on {product.createdAt}</p>
            {showStock(product.invintoryCount)}
            <br />
    
            {showViewButton(showViewProductButton)}

          </div>
        </div>
      );
    };
    
    export default VehicleView;
    