import './Product.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Menubar from './Menubar';
import ErrorMsg from './ErrorMsg';
import ProductDetails from './ProductDetails';


const App=()=>{

    return(
       <>
        <Menubar />

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails/:productid" element={<ProductDetails />} />
          <Route path="*" element={<ErrorMsg />} />
       </Routes>
       </>
    );
}

export default App;



