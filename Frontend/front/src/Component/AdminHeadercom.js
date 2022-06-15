import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AdminAuthService from '../Services/SellerAuthService';

function HeadeComponent(props) {
    
        return (
            <div>
 <header >
<nav className="navbar navbar-expand-md navbar-dark  navbar-default navbar-fixed-top fixed-top " style={{backgroundColor: '#3e4551'}}>
<div ><Link to={"/"} className="navbar-brand "> <h1>S-Pharmacist.in</h1></Link></div>
<div  className='navsp'><Link to={"/home"} className="navbar-brand "> <h1>Home</h1></Link></div>
<div className='navsp'><Link to={"/list"} className="navbar-brand "> <h1>Drug</h1></Link></div>

        
       
</nav>
</header>
  </div>
        );
    }


export default HeadeComponent;