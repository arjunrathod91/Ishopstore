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


function App() {
  return (
      <MyContextProvider>
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
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MyContextProvider>
  );
}



export default App;
