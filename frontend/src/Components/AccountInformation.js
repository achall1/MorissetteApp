import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import '../Styles/account_info_styles.css'
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
    const [editAcc, setEditAcc] = useState(false)

    useEffect(() => {
        const userObj = JSON.parse(localStorage.getItem('UserAuth'));
        const userid = userObj.customer._id

        axios.get(`http://localhost:8000/api/user/${userid}`, {
            headers: {
                'Authorization': `Bearer ${userObj.token}`
            }
        }).then((res) =>{
            setName(res.data.customer.name);
            //should be setName(res.data.customer.first_name + ' ' + res.data.customer.last_name)
            setEmail(res.data.customer.email);
            setCreditCard(res.data.customer.creditCard);
            setBuyHistory(res.data.customer.buyHistory);
            setAddress(res.data.customer.Street_Address);
            setZipCode(res.data.customer.Zip);
            setSSN(res.data.customer.Last4SSN);
            setCVV(res.data.customer.CVV);
            //needs setInsurer(res.data.customer.autoInsurer)
        })
        .catch((err) => console.log(err))
    }, [stopLoop])

    if(editAcc){
        return <Redirect to='/edit-account'/>
    }
    return (
        <div>
            <Header />
                <div>
                    <h1 style={{textAlign: 'center', backgroundColor: 'blue', paddingBottom: '20px'}}>
                        <strong>Customer Information</strong>
                        </h1>
                    <hr className='customer-hr'></hr>
                        <div id="customer-info">
                            <p className="customer-attributes">Name: {name} </p>
                            <p className="customer-attributes">Email: {email} </p>
                            <p className="customer-attributes">Vehicle(s): {buyHistory} </p>
                            <p className="customer-attributes">Credit Card: #: {creditCard} </p>
                            <p className="customer-attributes">CVV: {cvv} </p>
                            <p className="customer-attributes">Home Address: {address} </p>
                            <p className="customer-attributes">Auto Insurer: {insurer} </p>
                            <p className="customer-attributes">Zip code: {zipCode} </p>
                            <p className="customer-attributes">Last 4 SSN #: {ssn} </p>
                            <button className="update-account-bttn" onClick={ () => setEditAcc(true)}> Update Account </button>
                        </div>
                </div>
            <Footer />
        </div>
    )
}

export default AccountInformation;