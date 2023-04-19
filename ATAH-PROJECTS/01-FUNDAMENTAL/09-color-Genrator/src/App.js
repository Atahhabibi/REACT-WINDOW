import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form'



function App() {
  return <main>

      <ToastContainer position='top-center' autoClose={1000} />
      <Form/>

  </main>
}

export default App
