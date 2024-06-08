import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import Products from './Pages/Products/Products';
// import Product from './Pages/Product/Product';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// import ProductContext from './Context/UserContext';
import { useContext, useState } from 'react';
import {MyContextProvider } from './Context/UserContext';
import Product from './Pages/Product/Product';
import Products from './Pages/Products/Products';
import SearchProduct from './Pages/SearchProduct/SearchProduct';
import Payments from './Pages/Payments/Payments';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import Admin from './Pages/Admin/Admin';
import Account from './Pages/Account/Account';
import Wishlist from './Pages/Wishlist/Wishlist';
import AdminPage from './Pages/Admin/AdminPage';


function App() {
  // const PUBLISHABLE_KEY = 'pk_test_cHJvZm91bmQtY29kLTMuY2xlcmsuYWNjb3VudHMuZGV2JA'
  return (
      <MyContextProvider>
        {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/children' element={<Products/>} />
            <Route path='/men' element={<Products/>} />
            <Route path='/women' element={<Products/>} />
            <Route path='/searchPage' element={<SearchProduct/>} />
            <Route path='/payments' element={<Payments/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/adminpage' element={<AdminPage/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        {/* </ClerkProvider> */}
      </MyContextProvider>
  );
}



export default App;
