import React, { Component } from 'react';


import "../Head&Foot/AdmHead.css"
function AdminHeader(props) {
    return (
        <>
      <div className='AdmBody'>
          <nav  className='fnav'>
            
 <a href="/sellerhome" >Home</a>
  <a href="/list">Products</a>
  <a href="/add">Add</a>
 
 <div className="animation start-home"></div>

</nav>

      </div>
    
      </>
    );
}

export default AdminHeader;