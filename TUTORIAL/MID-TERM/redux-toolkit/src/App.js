import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainers";
import { useSelector,useDispatch } from "react-redux";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";



function App() {
  
  const dispatch=useDispatch();
  
  const {cartItems,isLoading}=useSelector((store)=>store.cart);
  const {isOpen}=useSelector((store)=>store.modal)


  useEffect(()=>{
   dispatch(calculateTotal())
  },[cartItems,dispatch])


  useEffect(()=>{
    dispatch(getCartItems("random"))
  },[dispatch])


   if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }




  return <main>

    <Navbar/>
    <CartContainer/>
    {isOpen &&  <Modal/>}
   


  </main>;
}
export default App;
