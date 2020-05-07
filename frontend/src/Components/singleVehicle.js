import React, { useState, useEffect } from 'react';
import VehicleView from './vehicleView';
import { read,getVehicles } from './fetchvehicles';


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
        <div>
            model={product && product.model}
            make={product && product.make }
            className="container-fluid"
        >
            <div className="row">
                <div className="col-8">
                    {product && product.make && <VehicleView product={product} showViewProductButton={false} />}
                </div>

            </div>
       </div>
    );
};

export default SingleVehicle;
