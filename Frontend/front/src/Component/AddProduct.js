import { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Sellerservice from "../Services/Sellerservice";

import AdminHeader from "../Head&Foot/SellerHeader";
import "../Style/Adddrug.css"


const AddProduct = () => {
    const[name, setname] = useState('');
    const[price, setprice] = useState('');
    const[type, settype] = useState('');
    const[category, setcategory] = useState('');
    const {id} = useParams();
let navigate=useNavigate();
    const saveProduct = (e) => {
        e.preventDefault();
        
        const product = {name, price,type,category, id};
        if (id) {
            //update
            Sellerservice.updateProduct(product)
                .then(response => {
                    console.log('Drug data updated successfully', response.data);
                    navigate("/list");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            Sellerservice.addProduct(product)
            .then(response => {
                console.log("drug added successfully", response.data);
                navigate("/list");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
           Sellerservice.findbyid(id)
                .then(product => {
                    setname(product.data.name);
                    setprice(product.data.price);
                    settype(product.data.type);
                    setcategory(product.data.category);
                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div ><AdminHeader/>
        <div id="bg5"></div>
        <div className="container text-center" id="spafromnav "  >
            <h3 className="h1 ads">Add Product</h3>
            
            <form className="cl" >
               
             
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4 supp"
                        id="product name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter Product Name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4 supp"
                        id="price"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        placeholder="Enter Product Price"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4 supp"
                        id="type"
                        value={type}
                        onChange={(e) => settype(e.target.value)}
                        placeholder="Enter Product type"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4 supp"
                        id="category"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        placeholder="Enter Product category"
                    />

                </div>
                
                <div className="btad">
                    <button onClick={(e) => saveProduct(e)} className="btn btn-primary ">Save</button>
                </div>
            </form>
           <div className="adl">
            <Link to="/list" className="lins ">Back to List</Link>
            </div>
        </div>
        </div>
        
    )
}

export default AddProduct;