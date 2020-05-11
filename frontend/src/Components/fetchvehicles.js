import {API} from "../config";


export const getVehicles = () => {
    return fetch(`${API}/vehicles/findall`, {
        method: "GET"
    })
        .then(response => {

            console.log(response.data);
            return response.json();
            
        })
        .catch(err => console.log(err));
};


/*const getVehicles = (e) => {
    //Here we will sign up the user then log them in
    //e.preventDefault();
    axios.get('http://localhost:8000/api/vehicles/findall') 
    .then(response => {
        //return response.data();
        console.log(response.data);
        return response.data;
    })
    .catch( err => console.log("Axios vehicle request failed", err));
};
*/

export const read = productId => {
    return fetch(`${API}/vehicle/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const createOrder = (customerId, token, createOrderData) => {
    return fetch(`${API}/order/create/${customerId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ order: createOrderData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('UserAuth')) {
        return JSON.parse(localStorage.getItem('UserAuth'));
    } else {
        return false;
    }
};

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('UserAuth', JSON.stringify(data));
        next();
    }
};
export const getBraintreeClientToken = (customerId, token) => {
    return fetch(`${API}/braintree/getToken/${customerId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        } 
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const processPayment = (customerId, token, paymentData) => {
    return fetch(`${API}/braintree/payment/${customerId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
/// route for adding a finance request 
////user submits a financing application using their id
//router.post('/finance/create/:customerId', requireSignin, isAuth, create);
 export const createFinance = (customerId, token, finance) => {
    return fetch(`${API}/finance/create/${customerId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: finance
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
 //get customer info
 //router.get('/user/:customerId', requireSignin)

 export const getCustomerInfo = (customerId,token) => {
    return fetch(`${API}/user/${customerId}`, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}` }
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(err => console.log(err));
};