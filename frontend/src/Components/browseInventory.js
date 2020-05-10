import  axios  from 'axios';
import React, { useState, useEffect } from 'react';
import '../Styles/editAccount_style.css'
import Footer from './footer'
import Header from './header'
import { getVehicles } from './fetchvehicles';
import VehicleView from './vehicleView';


const BrowseInventory = (props) => {

    const [allVehicles,setallVehicles] = useState ([]);
    const [error, setError] = useState(false);
    const [refresh, setRefresh] = useState(false)

    const loadallVehicles = () => {
        getVehicles().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setallVehicles(data);
            }
        });
    };

    useEffect(() => {
        loadallVehicles();

    }, []);
    return ( 
        <div>
            <Header />
                <h2> New Arrivals cars </h2> 
                    <div>  
                    {    //vehicleView
                    allVehicles.map((product, i) => (
                    <div key={i} style={{display: 'inline-block'}} className="col-4 mb-3">
                    <VehicleView product={product} />
                    </div>
                    ))}
                    </div>
                <Footer />
        </div>
    );
};

export default BrowseInventory;