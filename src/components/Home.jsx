import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Contexts'
import Loading from './Loading'

import axios from '../utils/axios';
const Home = () => {
   const {products} = useContext(ProductContext);
    // console.log(products);
    const {search}=useLocation();
    // const category=decodeURIComponent(search.split("=")[1]);
    const category = search.includes("=") ? decodeURIComponent(search.split("=")[1]) : null;
    // let filterproduct=products;
     const[filterproduct,setfilterproduct]= useState(null);
    const getproductcategory = async()=>{
        try{
            const {data} = await axios.get(`/products/category/${category}`);
            setfilterproduct(data);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        // console.log(category);
        if(!filterproduct || category==null) setfilterproduct(products);
       if (category && category!=="undefind") 
        {
            // getproductcategory();
            setfilterproduct(products.filter((p)=>p.category==category));

        }

    },[category,products]);
    // console.log(filterproduct);
  return (products ?
    <>
    <Nav />

    <div className=' w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto    '>
       { filterproduct && filterproduct.map((p,i)=>(
         < Link key={p.id} to={`/details/${p.id}`} className='mr-3 mb-3 card  border shadow-lg rounded p-2.5 w-[18%] h-[30vh] flex flex-col justify-center items-center'>
         <div  className=" hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"style={{backgroundImage:
         `url(${p.image})`  
         }}></div>
         <h1 className='hover:text-blue-300'>{p.title}</h1>
       </Link>
   
       ))}

   
    
   
  </div>
  </>:<Loading/>
  )
}

export default Home
