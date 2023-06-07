import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
const ProductDetails=()=>{
    const {productid}=useParams();
    const[products,setProducts]=useState([]);

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products/'+productid)
        .then(response => {
         
            const rcds=[...products];
            rcds.push(response.data);
            setProducts(rcds);
          
        })
        .catch(error => {
          
          
          console.log(error);
        }) 

    },[]);


    return(
        <>
        <h1>Product Details</h1>
        <h2>Product number: {productid}</h2>
        {
                products.map(product=>{
                    return(
                        <div key={product.id} className='box'>
                            <h2>{product.title}</h2>
                            <p>
                          
                            <img src={product.image} alt="no image"/>
                          <br /> 
                                {product.description}
                                {product.price}
                         
                                
                            </p>
                        </div>
                    )
                })
            } 

        </>
    );

}
export default ProductDetails;