import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import { createFinance, getCustomerInfo,isAuthenticated } from './fetchvehicles';
import Header from './header'
import Footer from './footer'
import { Form, Button, Col, Row } from 'react-bootstrap'

//get customer info instade if catagorey and replace it 
const AddFinance = () => {
    const [values, setValues] = useState({
        occupation: '',
        income: '',
        ssn: '',
        customerInfo: [],
        dob: '',
        employersname: '',
        credit: '',
        createdFinance: '',
        status: '',
        paymentAmount: '',
        interstRate: '',
        loading: false,
        error: '',
        redirectToProfile: false,
        formData: ''
    });
   // const userObj = JSON.parse(localStorage.getItem('UserAuth'));
    //const userid = userObj.customer._id;
    const {customer,  token } = isAuthenticated();
    const {
        occupation,
        income,
        ssn,
        dob,
        customerInfo,
        employersname,
        credit,
        status,
        paymentAmount,
        interstRate,
        loading,
        error,
        createdFinance,
        redirectToProfile,
        formData
    } = values;

    // load categories and set form data
    // onChange={handleChange('customer')} className="form-control" value={customer._id}>
    const init = () => {
        getCustomerInfo(customer._id, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    customerInfo: data,
                    formData: new FormData()
                });
            }
            console.log(customerInfo);
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => event => {
        const value = event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        createFinance(customer._id, token, formData).then(data => {
            if (data.error) {
                console.log(data.error);
                setValues({ ...values, error: data.error });
            } else {
                console.log(values);
                setValues({
                
                    ...values,
                    occupation: '',
                    income: '',
                    interstRate: '',
                    ssn: '',
                    employersname: '',
                    loading: false,
                    createdFinance: values

                });
            }
        });
    };

    const newPostForm = () => (
        <div>
        <Header />
        
        <div style={{textAlign: 'center', overflow: 'auto', height: '49rem'}}>

        <form className="mb-3" onSubmit={clickSubmit}>
            

            <div className="form-group">
                <label className="text-muted">Occupation</label>
                <input onChange={handleChange('occupation')} type="text" className="form-control" value={occupation} />
            </div>

            <div className="form-group">
                <label className="text-muted">Income</label>
                <textarea onChange={handleChange('income')} type="number" className="form-control" value={income} />
            </div>

            <div className="form-group">
                <label className="text-muted">Last4-SSN</label>
                <input onChange={handleChange('ssn')} type="number" className="form-control" value={ssn} />
            </div>


            <div className="form-group">
                <label className="text-muted">DOB</label>
                <input onChange={handleChange('dob')} type="text" className="form-control" value={dob}/>
            </div>

            <div className="form-group">
                <label className="text-muted">Employer's Name</label>
                <input onChange={handleChange('employersname')} type="text" className="form-control" value={employersname} />
            </div>
            <div className="form-group">
                <label className="text-muted">Credit-Score</label>
                <input onChange={handleChange('credit')} type="text" className="form-control" value={credit} />
            </div>
            <div className="form-group">
                <label className="text-muted">Application-Status</label>
                <input onChange={handleChange('status')} type="text" className="form-control" value={status} />
            </div>
            <div className="form-group">
                <label className="text-muted">Down-Payment-Amount</label>
                <input onChange={handleChange('paymentAmount')} type="text" className="form-control" value={paymentAmount} />
            </div>
            <div className="form-group">
                <label className="text-muted">Interest-Rate-Limit</label>
                <input onChange={handleChange('interstRate')} type="text" className="form-control" value={interstRate} />
            </div>
            <Button variant="primary" type="submit">
                            Submit
                     </Button>
            
        </form>
        </div>
         <Footer />
         </div>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdFinance ? '' : 'none' }}>
            <h2>congratulations!!! Your loan Form is Submitted!</h2>
            <p1>Your-Income: {`${createdFinance.income}`}</p1>
            <br/>
            <p1>Your-Occupation: {`${createdFinance.occupation}`}</p1>
            <br/>
            <p1>Your-Employers Name: {`${createdFinance.employersname}`}</p1>
            <br/>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return (
        
      
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div>
        
    );
};

export default AddFinance;
