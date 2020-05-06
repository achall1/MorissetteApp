


export const getVehicles = () => {
    return fetch(`http://localhost:8000/api/vehicles/findall`, {
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