import { BrowserRouter,Route, Routes } from "react-router-dom"

import {AboutPage, HomePage,CartPage, ErrorPage, ProductsPage,SingleProductsPage, PrivatePage, CheckoutPage} from './pages'
import { Navbar,Footer, Sidebar } from "./components"



function App() {
  return <div>

    <BrowserRouter>

    <Sidebar/>

    <Navbar/>

    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="cart" element={<CartPage/>}/>
      <Route path="checkout" element={<PrivatePage><CheckoutPage/></PrivatePage>} />
      <Route path="products" element={<ProductsPage/>}/>
      <Route path="products/:id" element={<SingleProductsPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
     

    </Routes>

    <Footer/>
    

    </BrowserRouter>
   

  </div>
}

export default App
