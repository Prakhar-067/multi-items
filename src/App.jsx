// import React from 'react'
// import { Link, Route,Routes, useLocation } from 'react-router-dom'
// import Home from './components/Home'
// import Details from './components/Details'
// import Create from './components/Create'
// import Contexts from './utils/Contexts'
// const App = () => {
//   const{search,pathname}=useLocation();
//   return (
//     <Contexts>

    
//     <div className='h-screen  flex '>
//       {pathname !="/" || search.length > 0 &&(
//       <Link to="/" className=' text-red-200 absolute left-[18%] top-[5%]'>Home</Link>
        
//       )}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/details/:id" element={<Details />} />
//         <Route path="/create" element={<Create />} />
//       </Routes>
      
      
//     </div>
//     </Contexts>
//   )
// }

// export default App

import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Create from './components/Create';
import Contexts from './utils/Contexts';
import Edit from './components/edit';

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <Contexts> {/* ✅ Context Wrapper */}
      <div className="h-screen flex">
        {(pathname !== "/" || search.length > 0) && (
          <Link to="/" className="text-red-200 absolute left-[18%] top-[5%]">
            Home
          </Link>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Contexts>
  );
};

export default App;
