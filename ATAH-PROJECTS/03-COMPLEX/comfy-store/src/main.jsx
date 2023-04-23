import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProductsProvider } from './context/productsContext'
import { CartProvider } from './context/cartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductsProvider>
        <CartProvider>
           <App />
        </CartProvider>
    </ProductsProvider>
)
