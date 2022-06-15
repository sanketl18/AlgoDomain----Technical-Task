import React, { Component } from 'react';

import "../Head&Foot/DocHead.css"

function CustomerHeader(props) {
    
   
    return (
        <>
      <div className='AdmBody'>
          <nav  className='fnav'>
 <a href="/Customerhome">Home</a>
  <a href="/clist">Products</a>
 
</nav>

      </div>
      
      </>
    );
}

export default CustomerHeader;