import React from 'react';
import { Navigate } from 'react-router-dom';
import SellerAuthService from '../Services/SellerAuthService';

const PrivateRoute=({ children }) =>{
   const user =SellerAuthService.getCurrentUser();
    return user?children:<Navigate to="/unauthorize" />;
   };

export default PrivateRoute;