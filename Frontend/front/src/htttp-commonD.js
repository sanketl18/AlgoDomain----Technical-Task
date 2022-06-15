import axios from "axios";

 
export default axios.create({

    baseURL: 'http://localhost:9090/customer-service',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ localStorage.getItem("drSavedToken")
    }
});