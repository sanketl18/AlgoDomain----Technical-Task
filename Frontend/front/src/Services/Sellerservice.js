import axios from "axios";
import httpClient from "../http-common";


const viewAllproducts = () => {
    return httpClient.get('/seller/viewproducts');
}

const addProduct = data => {
    return httpClient.post("/seller/addproduct", data);
}


const findbyid = id => {
    return httpClient.get(`/seller/viewbyId/${id}`);
}


const updateProduct = data => {
    return httpClient.put("/seller/editproduct", data);
}

const deleteProduct = id => {
    return httpClient.delete(`/seller/deleteproduct/${id}`);
}

const SellerRegister = data => {
    return axios.post("http://localhost:9090/seller-service/register/reg", data);
}

const CustomerRegister = data => {
    return axios.post("http://localhost:9090/customer-service/register/reg", data);
}

export default {findbyid, viewAllproducts, addProduct, updateProduct, deleteProduct,
SellerRegister, CustomerRegister };