import { createContext,useContext,useReducer,useEffect} from "react";
import reducer from "./useReducer";
import data from "./data";
import { CHANGE_AMOUNT, CLEAR_CART, GET_TOTAL_AMOUNT, LOAD_DATA, REMOVE_ITEM } from "./Actions";

const AppContext=createContext();

const initialState={
  cart:[],
  amount:0,
  total:0,
}

const AppProvider = ({children}) => {

    const [state,dispatch]=useReducer(reducer,initialState)


    useEffect(() => {
      dispatch({
          type:LOAD_DATA,
          payload:data,
      })

    }, [])

    useEffect(() => {

      dispatch({
        type:GET_TOTAL_AMOUNT,
      })
    
    }, [state.cart])


    const removeItem=(id)=>{
      dispatch({
        type:REMOVE_ITEM,
        payload:id,
      })
    }

    const clearCart=()=>{
      dispatch({
        type:CLEAR_CART,
      })

    }


    const changeAmount=(id,name)=>{
       dispatch({
         type:CHANGE_AMOUNT,
         payload:{id,name}
       })
    }






    const contextValue={
        ...state,
        removeItem,
        clearCart,
        changeAmount,
     
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}


const useAppContext=()=>{
    return useContext(AppContext);
}


export {useAppContext,AppProvider}


