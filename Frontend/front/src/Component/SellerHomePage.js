import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SellerAuthService from '../Services/SellerAuthService';
import "../Style/AdminHomePage.css"

 function SellerHomePage(props) {
  

  const logOut = () => {
    SellerAuthService.logout();
  };
     return (
         <>
        <nav id='menu' className='navbar navbar-default navbar-fixed-top fixed-top'>
        <div className='container'>  
          <div className='navbar-header'>
            <h1><Link to={"/Adminhome"} className="navbar-brand animate-charcter"> EasyCart.in</Link></h1>
          </div>
  
  <div id="menu-outer">
  <div className="table"  id='bs-example-navbar-collapse-1'>
      <ul id="horizontal-list" >
              
              <li>
                <a href='/list' className='page-scroll deco h3 admh'style={{color:"black"}}>
                <span  className="navhh">  Products </span>
                </a>
              </li>
              <li>
             
                <a href='/' className='page-scroll deco' style={{color:"black"}} onClick={logOut}>
                <span className="navhl"> Logout </span>
                </a>

              </li>
            </ul>
          </div>
          </div>
          
          </div>
      </nav>
      <div id="bg3"></div>
      <div className='we'>
      <h1 className='hea'>
</h1>
</div>

      </>
     );
 }
 
 export default SellerHomePage;