import React, { createContext,useContext,useEffect,useState } from 'react';
import axios from './axios';
export const ProductContext=createContext();
const Contexts = (props) => {
   const[products,setproducts]= useState(JSON.parse(localStorage.getItem("products")) || null);



//    const getproducts=async() =>{
//     try{
//         const {data} = await axios.get('/products');
//         setproduct(data);
  

//     }
//     catch(error){
//       console.log(error);
//     }
//    }
//    console.log(products);
//    useEffect(()=>{
//     getproducts();
//    },[]);

  return (
        <ProductContext.Provider value={{products,setproducts}}>
  
    {props.children}
    </ProductContext.Provider>
  )
}

export default Contexts
