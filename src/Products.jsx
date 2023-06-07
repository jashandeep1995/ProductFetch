import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Products =()=>{

    const nav=useNavigate();

    const[products,setProducts]=useState([]);

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products')
        .then(response => {
         
            console.log(response.data);
            setProducts(response.data);
          
        })
        .catch(error => {
          
          
          console.log(error);
        }) 

    },[]);

    return(
        <>

            <h1>Products List</h1>
            {
                products.map(product=>{
                    return(
                        <div key={product.id} className='box'>
                            <h2>{product.title}</h2>
                            <p>
                            <Link to={"/productdetails/"+product.id}> 
                            <img src={product.image} alt="no image" className='productImage'/>
                            </Link>  
                            <br />
                                {product.price}
                         
                                
                            </p>
                        </div>
                    )
                })
            } 
  
        </>
    );
    

}
export default Products;