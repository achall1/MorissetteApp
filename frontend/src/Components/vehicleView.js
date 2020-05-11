import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import VehicleImage from './vehicleImage';
import { Card } from 'react-bootstrap'
import { addItem, updateItem, removeItem } from './cartHelpers';

const VehicleView = ({
    product,
    showViewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false,
    setRun = f => f,
    run = undefined
    // changeCartSize
  }) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);


    const addToCart = () => {
      // console.log('added');
      addItem(product, setRedirect(true));
    };

    const shouldRedirect = redirect => {
      if (redirect) {
        return <Redirect to="/cart" />;
      }
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

    const showRemoveButton = showRemoveProductButton => {
      return (
        showRemoveProductButton && (
          <button
            onClick={() => {
              removeItem(product._id);
              setRun(!run); // run useEffect in parent Cart
            }}
            className="btn btn-outline-danger mt-2 mb-2"
          >
            Remove Product
          </button>
        )
      );
    };

    const handleChange = productId => event => {
      setRun(!run); // run useEffect in parent Cart
      setCount(event.target.value < 1 ? 1 : event.target.value);
      if (event.target.value >= 1) {
        updateItem(productId, event.target.value);
      }
    };

    const showViewButton = showViewProductButton => {
        return (
          showViewProductButton && (
            <Link to="/view-product" className="mr-2">
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

      const showCartUpdateOptions = cartUpdate => {
        return (
          cartUpdate && (
            <div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Adjust Quantity</span>
                </div>
                <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
              </div>
            </div>
          )
        );
      };

     
      return (
          
        <div className="vehicleView ">
          <Card>
            {shouldRedirect(redirect)}
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

            {showAddToCartBtn(showAddToCartButton)}

            {showRemoveButton(showRemoveProductButton)}

            {showCartUpdateOptions(cartUpdate)}


          
        </div>
      );
    };
    
    export default VehicleView;
    