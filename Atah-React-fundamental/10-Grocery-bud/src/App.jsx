import { useState } from "react";
import Form from './Form'
import { nanoid } from "nanoid";
import Items from "./Items";
import { setToLocalStorage,getFromLocalStorage } from "./utils";
import { ToastContainer,toast } from "react-toastify";

const App = () => {

   const [items, setItems] = useState(getFromLocalStorage)

   const AddItem=(itemName)=>{

    const newItem={
      name:itemName,
      completed:false,
      id:nanoid(),
     
    }

    setItems([...items,newItem]);
    setToLocalStorage([...items,newItem]);
    toast.success('Item Added');


   }

   const removeItem=(itemID)=>{

    const newItems=items.filter((item)=>item.id!==itemID)
    setItems(newItems)
    setToLocalStorage(newItems);
    toast.success('Item deleted');

   }

   const setCompletedItem=(itemID)=>{

     const newItems=items.map((item)=>{
       if(item.id===itemID){

         if(!item.completed){
           toast.success('item mark as completed')
         }

         return {...item,completed:!item.completed};
       }
       return item;
     })
     
 
     setItems(newItems);
     setToLocalStorage(newItems);
     


   }



  return <section className="section-center">

    <Form  AddItem={AddItem}/>
    <Items items={items} removeItem={removeItem} setCompletedItem={setCompletedItem}/>
    <ToastContainer position="top-center"/>


  </section>;
};


export default App;