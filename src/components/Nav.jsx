// import React, { useContext } from 'react'
// import { ProductContext } from '../utils/Contexts'
// import { Link } from 'react-router-dom';

// const Nav = () => {
//     const {products}=useContext(ProductContext);
//     var distinct_category=products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
//     distinct_category=[...new Set(distinct_category)];
//     // console.log(distinct_category);
//     const color=()=>{
//         return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
//     }
//   return (
//     <nav className='bg-zinc-100 w-[15%] h-full flex flex-col items-center pt-5'>
//         <a className='py-3 px-5  border-blue-200 rounded  text-blue-300' href="/create">Add new product</a>
//         <hr className='w-[80%] my-3' />
//         <h1 className='text-2xl mb-3 w-[80%]  '>Category Filter</h1>
//         <div className=' w-[80%] '>
            
//             {distinct_category.map((c,i)=>(
//           <Link key={i} to={`/?category=${c}`}className=' mb-3 flex items-center'><span  style={{backgroundColor:color()}}className='mr-2 w-[15px] h-[15px]  rounded-full'></span> {c}</Link>
                
//             ))}
          
//         </div>

//       </nav>
//   )
// }

// export default Nav

import React, { useContext } from 'react';
import { ProductContext } from '../utils/Contexts';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { products } = useContext(ProductContext);

  // Extract distinct categories safely
  const distinct_category = products ? [...new Set(products.map(p => p.category))] : [];

  // Function to generate random color
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
  };

  return (
    <nav className='bg-zinc-100 w-[15%] h-full flex flex-col items-center pt-5'>
      <Link to="/create" className='py-1 px-2 border-blue-200 rounded text-blue-300'>
        Add new product
      </Link>
      <hr className='w-[80%] my-3' />
      <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
      <div className='w-[80%]'>
        {distinct_category.map((c, i) => (
          <Link key={i} to={`/?category=${encodeURIComponent(c)}`} className='mb-3 flex items-center'>
            <span style={{ backgroundColor: color() }} className='mr-2 w-[15px] h-[15px] rounded-full'></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
