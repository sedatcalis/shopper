import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import "bootstrap/dist/js/bootstrap.js"
import { ProductProvider } from './context/ProductContext.jsx'
import { BasketProvider } from './context/BasketContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </BasketProvider>
   
  </React.StrictMode>,
)
