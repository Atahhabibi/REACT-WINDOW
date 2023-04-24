import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProductsProvider } from './context/productsContext'
import { CartProvider } from './context/cartContext'
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContextProvider } from './context/userContext'

const CLIENT_KEY=import.meta.env.VITE_CLIENT_KEY;
const DOMAIN_KEY=import.meta.env.VITE_DOMAIN_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider domain={DOMAIN_KEY} clientId={CLIENT_KEY}
                   authorizationParams={{redirect_uri: window.location.origin }}>

    <UserContextProvider>

       <ProductsProvider>
           <CartProvider>
              <App />
          </CartProvider>
      </ProductsProvider>


    </UserContextProvider>

    </Auth0Provider>
)
