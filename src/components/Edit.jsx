// import React, { useContext, useEffect, useState } from 'react'
// import { ProductContext } from '../utils/Contexts';
// import { nanoid } from 'nanoid';
// import { useNavigate, useParams } from 'react-router-dom';
// const Edit = () => {
//     const {products,setproducts}=useContext(ProductContext);
//     const navigate=useNavigate();
//     const{id}=useParams();
//     const [product,setproduct]=useState({
//         id:"",
//         title:"",
//         image:"",
//         description:"",
//         price:"",
//         category:""
//     });
//     const ChangeHandler = (e)=>{
//         // console.log(e.name,e.target.value);
//         setproduct({...product,[e.target.name]:e.target.value})
//     } 
//     // const [title,settitle]=useState("");
//     // const [image,setimage]=useState("");
//     // const [description,setdescription]=useState("");
//     // const [price,setprice]=useState("");
//     // const [category,setcategory]=useState("");

//     useEffect(()=>{
//           setproduct(products.filter((p)=>p.id==id)[0])
//     },[id])
//    const AddProductHandler=(e)=>{
//        e.preventDefault();
//        if(product.title.trim().length<5 || product.description.trim().length<5 || product.price.trim().length<1 || product.category.trim().length<5 || product.image.trim().length<5){
//         alert("All fields must be filled out and should have at least 5 characters");
//         return;
//        }
//        const pi =products.findIndex((p)=>p.id ==id)[0];
//        const copydata=[...products];
//        copydata[pi]={...products[pi],...product};
//     //    console.log(copydata);
//     //    const Product={id:nanoid(),title,image,description,price,category};
//        setproducts(copydata);
//        localStorage.setItem("products",JSON.stringify(copydata));
//     // //    toast.success("New product added successfully")
//        navigate(-1);
//    }
//   return (
//     <form onSubmit={AddProductHandler} className=" flex flex-col p-[5%] items-center w-screen h-screen" action="">
//         <h1 className='text-3xl w-1/2 mb-5'>Edit product</h1>
//         <input type="url" placeholder="image link" className="text-2xl  w-1/2 bg-zinc-200 rounded p-3 mb-3 " 
//         name="image"
//         onChange={ChangeHandler}
//         value={product && product.image}
//         />
//         <input type="text" placeholder="title" className="text-2xl  w-1/2 bg-zinc-200 rounded p-3 mb-3 " 
//         name='title'
//         onChange={ChangeHandler}
//         value={product && product.title}
//         />
//         <div className='w-1/2 flex justify-between '>
//         <input type="text" placeholder="category" className="text-2xl  w-[45%] bg-zinc-200 rounded p-3 mb-3 " 
//         name='category'
//         onChange={ChangeHandler}
//         value={product && product.category}
//         />
//         <input type="number" placeholder="price" className="text-2xl  w-[45%] bg-zinc-200 rounded p-3 mb-3 " 
//         name='price'
//         onChange={ChangeHandler}
//         value={product && product.price}
//         />
//         </div>

//         <textarea name="description" onChange={ChangeHandler} placeholder='enter product description here...'
//         value={product && product.description} className="text-2xl  w-1/2 bg-zinc-200 rounded p-3 mb-3 "rows="10" id=""></textarea>
//         <div className="w-1/2">
//         <button className='self- text-3xl  py-3 px-5 rounded border-2 border-blue-300 text-blue-300'>Edit product</button>

//         </div>
        

//     </form>
//   )
// }

// export default Edit








import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../utils/Contexts';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { products, setproducts } = useContext(ProductContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setproduct] = useState({
        id: "",
        title: "",
        image: "",
        description: "",
        price: "",
        category: ""
    });

    const ChangeHandler = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const foundProduct = products.find((p) => p.id == id);
        if (foundProduct) {
            setproduct(foundProduct);
        }
    }, [id, products]);

    const EditProductHandler = (e) => {
        e.preventDefault();
        if (
            product.title.trim().length < 5 ||
            product.description.trim().length < 5 ||
            product.price.trim().length < 1 ||
            product.category.trim().length < 5 ||
            product.image.trim().length < 5
        ) {
            alert("All fields must be filled out and should have at least 5 characters");
            return;
        }

        const pi = products.findIndex((p) => p.id == id);
        if (pi === -1) {
            alert("Product not found!");
            return;
        }

        const copydata = [...products];
        copydata[pi] = { ...products[pi], ...product };
        setproducts(copydata);
        localStorage.setItem("products", JSON.stringify(copydata));
        navigate(-1);
    };

    return (
        <form onSubmit={EditProductHandler} className="flex flex-col p-[5%] items-center w-screen h-screen">
            <h1 className="text-3xl w-1/2 mb-5">Edit Product</h1>
            
            <input type="url" name="image" placeholder="Image link" 
                className="text-2xl w-1/2 bg-zinc-200 rounded p-3 mb-3" 
                onChange={ChangeHandler} 
                value={product?.image || ""} />
            
            <input type="text" name="title" placeholder="Title" 
                className="text-2xl w-1/2 bg-zinc-200 rounded p-3 mb-3" 
                onChange={ChangeHandler} 
                value={product?.title || ""} />
            
            <div className="w-1/2 flex justify-between">
                <input type="text" name="category" placeholder="Category" 
                    className="text-2xl w-[45%] bg-zinc-200 rounded p-3 mb-3" 
                    onChange={ChangeHandler} 
                    value={product?.category || ""} />
                
                <input type="number" name="price" placeholder="Price" 
                    className="text-2xl w-[45%] bg-zinc-200 rounded p-3 mb-3" 
                    onChange={ChangeHandler} 
                    value={product?.price || ""} />
            </div>

            <textarea name="description" placeholder="Enter product description here..."
                className="text-2xl w-1/2 bg-zinc-200 rounded p-3 mb-3" 
                rows="10" onChange={ChangeHandler} 
                value={product?.description || ""}></textarea>

            <div className="w-1/2">
                <button className="text-3xl py-3 px-5 rounded border-2 border-blue-300 text-blue-300">Edit Product</button>
            </div>
        </form>
    );
};

export default Edit;

