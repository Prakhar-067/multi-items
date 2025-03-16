// import React, { useContext, useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import axios from "../utils/axios"
// import Loading from './Loading';

// import { ProductContext } from '../utils/Contexts'
// const Details = () => {
//     const navigate= useNavigate();

//     const {products,setproducts} = useContext(ProductContext);
//    // console.log(products);
//    const[product,setproduct]= useState(null);
//    const{id}= useParams();

// //    console.log(id);
//     // const getsingleproduct= async()=>{
//     //     try{
//     //         const {data} = await axios.get(`/products/${id}`);
//     //         setproduct(data);
            
//     //     }catch(error){
//     //         console.error(error);
//     //     }
//     // }
//     useEffect(()=>{
//         if(!product){
//           setproduct(products.filter((p)=>p.id==id)[0]);
//         }
//         // getsingleproduct();
//     },[]);
//     const productdeletehandler=(id)=>{
//         const filterproduct=products.filter((p)=>p.id!==id);
//         setproducts(filterproduct);
//         localStorage.setItem('products',JSON.stringify(filterproduct));
//         navigate('/');
//     }
//   return product?(
//     <div className='w-[70%] flex gap-15 h-full items-center  m-auto p-[10%]'>
//       <img  className=" oject-contain h-[100%] w-[50%] "src={`${product.image}`} alt="" /> 
//       <div className='content  '>
//         <h1 className='text-4xl'>{product.title}</h1>
//         <h3 className='text-zinc-400 my-4'>{product.category}</h3>
//         <h2 className='text-red-300 mb-3'>{product.price}</h2>
//         <p className='mb-5'>{product.description}</p>
//         <Link className='mr-3 py-2 px-5 border rounded border-blue-200 text-blue-300'>Edit</Link>
//         <button onClick={()=>productdeletehandler(product.id)} className='py-2 px-5 border rounded border-red-200 text-red-300'>Delete</button>
//       </div>
//     </div>
//   ):<Loading/>
// }

// export default Details


import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from '../utils/Contexts';

const Details = () => {
    const navigate = useNavigate();
    const { products, setproducts } = useContext(ProductContext);
    const [product, setproduct ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (products && products.length > 0) {
            const selectedProduct = products.find((p) => p.id == id);
            setproduct(selectedProduct || null);
        }
    }, [products, id]);

    const productdeletehandler = (id) => {
        const updatedProducts = products.filter((p) => p.id !== id);
        setproducts(updatedProducts);

        setTimeout(() => {
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        }, 100);

        navigate('/');
    };

    return product ? (
        <div className='w-[70%] flex gap-15 h-full items-center m-auto p-[10%]'>
            <img className="object-contain h-[100%] w-[50%]" src={`${product.image}`} alt="" />
            <div className='content'>
                <h1 className='text-4xl'>{product.title}</h1>
                <h3 className='text-zinc-400 my-4'>{product.category}</h3>
                <h2 className='text-red-300 mb-3'>{product.price}</h2>
                <p className='mb-5'>{product.description}</p>
                <Link to={`/edit/${product.id}`} className='mr-3 py-2 px-5 border rounded border-blue-200 text-blue-300'>Edit</Link>
                <button onClick={() => productdeletehandler(product.id)} className='py-2 px-5 border rounded border-red-200 text-red-300'>Delete</button>
            </div>
        </div>
    ) : <Loading />;
};

export default Details;
