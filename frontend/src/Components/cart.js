import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from './cartHelpers';
import VehicleView from './vehicleView';
import { Card } from 'react-bootstrap';
import Checkout from './Checkout';


//import Checkout from './Checkout';
//<Checkout products={items} setRun={setRun} run={run} />
const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        console.log('MAX DEPTH ...');
       setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <Card>
                <Card.Body>
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr />
                {items.map((product, i) => (
                   
                        
                             <VehicleView 
                                key={i}
                                product={product} 
                                showAddToCartButton={false}
                                cartUpdate={true}
                                showRemoveProductButton={true}
                                setRun={setRun}
                                run={run}
                             />
                ))}
            </div>
            </Card.Body>
            </Card>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/browse">Continue shopping</Link>
        </h2>
    );

    return (
        <div>
           <div className="jumbotron"></div>
           <h2>"Shopping Cart"</h2>
           <p className="lead"> "Manage your cart items. Add remove checkout or continue shopping."</p>
           < div className = "container-fluid"></ div>
        
            <div className="row">
                <div className="col-6">{items.length > 0 ? showItems(items) : noItemsMessage()}</div>

                <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <Checkout products={items} setRun={setRun} run={run} />
                   
                    <hr />              
                </div>
            </div>
       </div>
    );
};

export default Cart;
