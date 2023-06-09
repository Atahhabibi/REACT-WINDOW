import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context';
import 'normalize.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <AppProvider>

       <App />
   </AppProvider> );
