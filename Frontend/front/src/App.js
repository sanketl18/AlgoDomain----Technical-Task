import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import App1 from './App1';
import Customer from './UsersAD/CustomerLogin';
import Seller from './UsersAD/SellerLogin';

import AddProduct from './Component/AddProduct';
import ProductList from './Component/SellerProductList';
import NotFound from './Error/NotFound';
import CustomerProduct from './Component/CustomerProduct';
import SellerReg from './UsersAD/SellerReg';
import CustomerReg from './UsersAD/CustomerReg';
import SellerHomePage from './Component/SellerHomePage';


import Paytm from './Payment/Paytm';
import Unauthorize from './Error/Unauthorize';
import CustomerHomePage from './Component/CustomerHomePage';
import Checkout from './StripCopm/Checkout';
import PrivateRoute from './PrivateRoute/SellerPrivate';
import DPrivateRoute from './PrivateRoute/CustomerPrivate';




function App() {
  return (

    <div>
      <BrowserRouter>

        <div>
          <Routes>

            <Route exact path="/" element={<App1 />} />

            {/* Login and signUp  */}
            <Route path="/seller" element={<Seller />} />
            <Route path="/seller/reg" element={<SellerReg />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/reg" element={<CustomerReg />} />

            {/* Seller Services*/}
            <Route path="/list" element={<PrivateRoute><ProductList /> </PrivateRoute>} />
            <Route path="/add" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
            <Route path="/drug/edit/:id" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
            
            {/*  Customer Services*/}
            <Route path="/clist" element={<DPrivateRoute><CustomerProduct /></DPrivateRoute>} />
            

            {/* Home pages */}
            <Route path="/Sellerhome" element={<PrivateRoute><SellerHomePage /></PrivateRoute>} />
            <Route path="/Customerhome" element={<DPrivateRoute><CustomerHomePage /></DPrivateRoute>} />


            {/*  errors*/}
            <Route path="*" element={<NotFound />} />
            <Route path="/unauthorize" element={<Unauthorize />} />

            {/*  payment*/}
            <Route path="/pay" element={<Paytm />} />
            <Route path="/stripe/pay" element={<Checkout />} />
             
            
          </Routes>
        </div>
      </BrowserRouter>

    </div>

  );
}


export default App;
