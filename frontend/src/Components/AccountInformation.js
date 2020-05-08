import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AccountInformation = () => {
    const [stopLoop, setStopLoop] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [creditCard, setCreditCard] = useState('')
    const [buyHistory, setBuyHistory] = useState('')
    const [address, setAddress] = useState('')
    const [insurer, setInsurer] = useState('Nationwide')
    const [zipCode, setZipCode] = useState('')
    const [ssn, setSSN] = useState('');
    const [cvv, setCVV] = useState('326556')
    useEffect( () => {
        const userObj = JSON.parse(localStorage.getItem('UserAuth'));
        const userid = userObj.customer._id

        axios.get(`http://localhost:8000/api/user/${userid}`, {
            headers: {
                'Authorization': `Bearer ${userObj.token}`
            }
        }).then((res) =>{
            setName(res.data.customer.name);
            setEmail(res.data.customer.email);
            setCreditCard(res.data.customer.creditCard);
            setBuyHistory(res.data.customer.buyHistory);
            setAddress(res.data.customer.Street_Address);
            setZipCode(res.data.customer.Zip);
            setSSN(res.data.customer.Last4SSN);
            setCVV(res.data.customer.CVV);
        })
        .catch((err) => console.log(err))
    }, [stopLoop])
    return (
        <div>
           <h1><strong>Customer Information</strong></h1>
           <hr></hr>
           <p>Name: {name} </p>
           <p>Email: {email} </p>
           <p>Vehicle(s): {buyHistory} </p>
           <p>Credit Card: #: {creditCard} </p>
           <p>CVV: {cvv} </p>
           <p>Home Address: {address} </p>
           <p>Auto Insurer: {insurer} </p>
           <p>Zip code: {zipCode} </p>
           <p>Last 4 SSN #: {ssn} </p>
        </div>
    )
}

export default AccountInformation;