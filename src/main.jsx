import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contexts from './utils/Contexts.jsx'

import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Contexts>
   <BrowserRouter>

    <App />
    <ToastContainer />
   </BrowserRouter>
   </Contexts>
  
)
