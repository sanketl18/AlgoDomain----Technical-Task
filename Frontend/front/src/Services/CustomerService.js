import axios from "axios";
import httpClient from "../htttp-commonD";


const viewAllProducts = () => {
    return httpClient.get('/customer/viewproducts');
}


const findbyid = id => {
    return httpClient.get(`/customer/viewbyId/${id}`);
}



export default {findbyid, viewAllProducts};