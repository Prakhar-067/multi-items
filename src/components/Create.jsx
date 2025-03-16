import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Contexts';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

import { toast } from'react-toastify';
const Create = () => {
    const navigate=useNavigate();
    const {products,setproducts}=useContext(ProductContext);
    
   const [title,settitle]=useState("");
   const [image,setimage]=useState("");
   const [description,setdescription]=useState("");
   const [price,setprice]=useState("");
   const [category,setcategory]=useState("");
   const AddProductHandler=(e)=>{
       e.preventDefault();
       if(title.trim().length<5 || description.trim().length<5 || price.trim().length<1 || category.trim().length<5 || image.trim().length<5){
        alert("All fields must be filled out and should have at least 5 characters");
        return;
       }
       const Product={id:nanoid(),title,image,description,price,category};
       setproducts([...products,Product]);
       localStorage.setItem("products",JSON.stringify([...products,Product]));
       toast.success("New product added successfully")
       navigate("/");
   }
  return (
    <form onSubmit={AddProductHandler} className=" flex flex-col p-[5%] items-center w-screen h-screen" action="">
        <h1 className='text-3xl w-1/2 mb-5'>Add new product</h1>
        <input type="url" placeholder="image link" className="text-2xl  w-1/2 bg-zinc-200 rounded p-3 mb-3 " 
        onChange={(e)=>setimage(e.target.value)}
        value={image}
        />
        <input type="text" placeholder="title" className="text-2xl  w-1/2 bg-zinc-200 rounded p-3 mb-3 " 
        onChange={(e)=>settitle(e.target.value)}
        value={title}
        />
        <div className='w-1/2 flex justify-between '>
        <input type="text" placeholder="category" className="text-2xl  w-[45%] bg-zinc-200 rounded p-3 mb-3 " 
        onChange={(e)=>setcategory(e.target.value)}
        value={category}
        />
        <input type="number" placeholder="price" className="text-2xl  w-[45%] bg-zinc-200 rounded p-3 mb-3 " 
        onChange={(e)=>setprice(e.target.value)}
        value={price}
        />
        </div>

        <textarea name="" onChange={(e)=>setdescription(e.target.value)} placeholder='enter product description here...'
        value={description} className="text-2xl  w-1/2 bg-zinc-200 rounded p-3 mb-3 "rows="10" id=""></textarea>
        <div className="w-1/2">
        <button className='self- text-3xl  py-3 px-5 rounded border-2 border-blue-300 text-blue-300'>Add new product</button>

        </div>
        

    </form>
  )
}

export default Create
