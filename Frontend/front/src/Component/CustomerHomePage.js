import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomerAuthService from '../Services/CustomerAuthService';

import "../Style/DocHome.css"

 function CustomerHomePage(props) {
  

  const logOut = () => {
    CustomerAuthService.logout();
  };
     return (
         <>
        <nav id='menu' className='navbar navbar-default navbar-fixed-top fixed-top'>
        <div className='container'>  
          <div className='navbar-header'>
            <h1><Link to={"/Customerhome"} className="navbar-brand animate-charcter"> EasyCart.in</Link></h1>
          </div>
  
  <div id="menu-outer">
  <div className="table"  id='bs-example-navbar-collapse-1'>
      <ul id="horizontal-list" >
              
              <li>
                <a href='/clist' className='page-scroll deco h3 doch'style={{color:"black"}}>
                 <span  className="navhh"> Products </span>
                </a>
              </li>

             <li>
                <a href='/' className='page-scroll deco' style={{color:"black"}} onClick={logOut}>
               <span className="navhl">  Logout </span>
                </a>
              </li>
            </ul>
          </div>
          </div>
          
          </div>
      </nav>
      <div id="bg6"></div>

      <div className='dob'>
      <h1 className='hdd'>
        <div>
      <span className='a1'>Welcome</span>
  <span className='a2'>to</span>
  </div>
  <span className='a3'>EasyCart</span>
  <span  className='a4'> better</span>
  <span className='a5'>way</span>
  <span className='a6'> to</span>
  <span className='a7'>shop</span>
  <span className='a8'>for</span>
  <span className='a9'>All</span>
  <span className='a10'>your</span>
  <span className='a11'>needs</span>
</h1>
</div>
             
    
      </>
     );
 }
 
 export default CustomerHomePage;