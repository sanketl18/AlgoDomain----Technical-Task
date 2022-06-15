import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sellerservice from '../Services/Sellerservice';

import SellerHeader from '../Head&Foot/SellerHeader';
import "../Style/DrugList.css"

const ProdudtList = () => {
  
  const [products, setproduct] = useState([]);
  const [SearchByname,setSearchByName] = useState('');
  const [SearchBytype,setSearchBytype] = useState('');
  const [SearchBycategory,setSearchBycategory] = useState('');
  
  const init = () => {
   Sellerservice.viewAllproducts()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setproduct(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
  Sellerservice.deleteProduct(id)
      .then(response => {
        console.log('product deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
   <div> <SellerHeader/>
    <div className="container" id='spafromnav'>
    <div className='inputc'>
      <h1 className='text-center' >Search By Name</h1>
     
      <input className='Drugli'  type="text" placeholder="name " onChange={e=>setSearchByName(e.target.value)} 
size="60" height="100"  />

<input className='Drugli'  type="text" placeholder="type " onChange={e=>setSearchBytype(e.target.value)} 
size="60" height="100"  /> 

<input className='Drugli'  type="text" placeholder="category" onChange={e=>setSearchBycategory(e.target.value)} 
size="60" height="100"  /> 

<div className="container ">
    <div className="row">
        <div className="col-sm-3">
            <a href="/add" className="add btn-lg">
                <span>Add Product</span>
            </a>
        </div>
    </div>
</div>
        <table className="table table-bordered table-striped t">
          <thead className="thead-dark tback">
            <tr>
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Product Category</th>
              <th>Product Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            products.filter((product)=>{
              if(SearchByname==""){
                return product
              }
              else if(product.name.toLowerCase().includes(SearchByname.toLowerCase())){
                return product
              }
            }).filter((product)=>{
              if(SearchBytype==""){
                return product
              }
              else if(product.type.toLowerCase().includes(SearchBytype.toLowerCase())){
                return product
              }
            }).filter((product)=>{
              if(SearchBycategory==""){
                return product
              }
              else if(product.category.toLowerCase().includes(SearchBycategory.toLowerCase())){
                return product
              }
            }
            
            ).map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <Link className="update"  to={`/drug/edit/${product.id}`}>
                  <i className="fa fa-edit" />
                   </Link>
                  
                  <button className="btn bt " onClick={() => {
                    handleDelete(product.id);
                  }}><i className="fa fa-trash delete"></i></button>
               
                
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
      <div>
    </div>
    </div>
    </div>
  );
}

export default ProdudtList;
