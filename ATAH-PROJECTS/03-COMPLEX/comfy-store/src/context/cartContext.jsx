import { createContext, useContext,useReducer,useEffect } from "react";
import useAxios from "../utils/useAxios";
import reducer from "../reducers/cartReducer";
import { CLEAR_CART, GET_ID, GET_ORDER_TOTAL, HANDLE_AMOUNT, HANDLE_CART_ITEM, HANDLE_CART_ITEM_AMOUNT, HANDLE_IMAGE, HANDLE_MAIN_COLOR, LOAD_PRODUCT_BEGIN, LOAD_PRODUCT_FAIL,LOAD_PRODUCT_SUCCESS, REMOVE_ITEM } from "../reducers/action";
const SingleProductURL='/react-store-single-product?id=';

const CartContextApi=createContext();

const initialState={

    single_product:{},
    id:'recd1jIVIEChmiwhe',
    isLoading:true,
    isError:false,
    imageIndex:0,
    colorIndex:0,
    itemAmount:1,
    cart:JSON.parse(localStorage.getItem('cart'))||[],
    totalItems:0,
    totalOrder:0,

}


const CartProvider=({children})=>{

    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const {data,isError,isLoading}=useAxios(SingleProductURL + state.id)

    
    const fetchProduct=()=>{


        if(isLoading){
            dispatch({
                type:LOAD_PRODUCT_BEGIN,
            })

        }

        if(isError){
            dispatch({
                type:LOAD_PRODUCT_FAIL,
            })
        }


        if(data!==null){
            dispatch({
                type:LOAD_PRODUCT_SUCCESS,
                payload:data,
            })

        }
        
    }


    
    
    useEffect(() => {
        fetchProduct();
    }, [isLoading])
    
    
    const getId=(id)=>{
        dispatch({
            type:GET_ID,
            payload:id,
        })

    }

    const handleImg=(count)=>{
        dispatch({
           type:HANDLE_IMAGE,
           payload:count,
        })
    }

    const handleMainColor=(count)=>{
        dispatch({
           type:HANDLE_MAIN_COLOR,
           payload:count,
        })
    }

   

    const handleAmount=(name)=>{
        dispatch({
            type:HANDLE_AMOUNT,
            payload:name,
        })
    }

    const handleCartItem=()=>{
        dispatch({
            type:HANDLE_CART_ITEM,
        })
    }

    const handleCartItemAmount=(name,id)=>{
        dispatch({
            type:HANDLE_CART_ITEM_AMOUNT,
            payload:{id,name},
        })

        dispatch({
            type:GET_ORDER_TOTAL,
        })
    }

    const removeItem=(id)=>{
        dispatch({
            type:REMOVE_ITEM,
            payload:id,
        })
    }

    useEffect(() => {

        dispatch({
            type:GET_ORDER_TOTAL,
        })
    
    }, [state.cart])


    const clearCart=()=>{
        dispatch({
            type:CLEAR_CART,
        })
    }





    const contextValue={
       ...state,
       getId,
       handleImg,
       handleMainColor,
       handleAmount,
       handleCartItem,
       handleCartItemAmount,
       removeItem,
       clearCart,
    }


    return <CartContextApi.Provider value={contextValue}>{children}</CartContextApi.Provider>
}


const useCartContext=()=>{
    return useContext(CartContextApi);
}


export {useCartContext,CartProvider}