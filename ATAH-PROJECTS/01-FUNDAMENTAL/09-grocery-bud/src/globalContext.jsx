import React from 'react'
import { createContext,useContext } from 'react'
import { useState} from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const ContextAPI=createContext();


const GlobalContext = ({children}) => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items"))||[]);
    const [SingleItem, setSingleItem] = useState('');

    localStorage.setItem('items',JSON.stringify(items));


    const handleSubmit=(e)=>{
        e.preventDefault();
        const id=nanoid();

        if(!SingleItem){
            toast.error("Please provide value");
            return; 
        };
        
        setItems([...items,{name:SingleItem,id:id,completed:false}])
        localStorage.setItem('items',JSON.stringify(items));
        toast.success("Item added to the list")
    
    }

    const addItem=(value)=>{
        setSingleItem(value);
    }

    const removeItem=(id)=>{
        const newItem=items.filter((single)=>single.id!==id);
        setItems(newItem);
        localStorage.setItem('items',JSON.stringify(newItem));
        toast.success("Item removed from list")
    }

    const checkComplete=(id)=>{
    

        const newItem=items.map((single)=>{

            if(single.id===id){
            
                return {...single,completed:!single.completed}
            }else{
                return single;
            }

        });
    
        setItems(newItem);
        localStorage.setItem('items',JSON.stringify(newItem));
    }



    const contextValue={
       items,
       SingleItem,
       handleSubmit,
       setSingleItem,
       addItem,
       removeItem,
       checkComplete,
    }


  return <ContextAPI.Provider value={contextValue}>{children}</ContextAPI.Provider>
}


const useGlobalContext=()=>{
    return useContext(ContextAPI)
}


export {useGlobalContext,GlobalContext}
