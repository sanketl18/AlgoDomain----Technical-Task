import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomerHeader from '../Head&Foot/CustomerHeader';
import CustomerService from '../Services/CustomerService';
import "../Style/DocDrugli.css"

const CustomerProduct = () => {

  const [products, setproduct] = useState([]);
  const [SearchByname,setSearchByName] = useState('');
  const [SearchBytype,setSearchBytype] = useState('');
  const [SearchBycategory,setSearchBycategory] = useState('');
  

  const init = () => {
   CustomerService.viewAllProducts()
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

  

  return (
    <div><CustomerHeader/>
    <div className="container " >
    <h1 className="text-center spafromnav" >Search BY</h1>
     
      <div className='inputc'>
<input className='Drugli ' type="text" placeholder="name" onChange={e=>setSearchByName(e.target.value)} 
size="60" height="100" />

<input className='Drugli '  type="text" placeholder="type " onChange={e=>setSearchBytype(e.target.value)} 
size="60" height="100"  /> 

<input className='Drugli '  type="text" placeholder="category" onChange={e=>setSearchBycategory(e.target.value)} 
size="60" height="100"  /> </div>
      <div>
      
        <table className="table table-bordered table-striped">
          <thead className="thead-dark tback">
            <tr>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Type</th>
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
                <td>{product.category}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>
                <td>
                <Link className="btn btn-info sbc" to={`/order/${product.id}`}><i className="fa fa-shopping-cart cart"></i></Link>
         
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

export default CustomerProduct;
