import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {GlobalContext} from './globalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContext>
        <App />,
    </GlobalContext>
)
