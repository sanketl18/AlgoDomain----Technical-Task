import React from 'react';
import { Navigate } from 'react-router-dom';
import CustomerAuthService from '../Services/CustomerAuthService';

const CPrivateRoute=({ children }) =>{
   const user =CustomerAuthService.getCurrentUser();
    return user?children:<Navigate to="/unauthorize" />;
   };

export default CPrivateRoute;