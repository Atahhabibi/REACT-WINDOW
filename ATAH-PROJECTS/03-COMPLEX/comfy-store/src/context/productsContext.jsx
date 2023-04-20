import { createContext, useContext, useReducer,useEffect} from "react";
import reducer from '../reducers/productsReducer'
import useAxios from '../utils/useAxios';
import { LOAD_PRODUCTS_BEGIN,LOAD_PRODUCTS_SUCCESS,LOAD_PRODUCTS_FAIL, OPEN_SIDEBAR, CLOSE_SIDEBAR} from "../reducers/action";
const productsUrl='/react-store-products';
const SingleProduct='/react-store-single-product?id=';


const ProductsContext=createContext();

const initialState={
    products:[],
    featuredProducts:[],
    isSidebarOpen:false,
    isError:false,
    isLoading:true,
    amount:0,
    total:0,
}




const ProductsProvider=({children})=>{

    const {data,isError,isLoading}=useAxios(productsUrl);


    const [state, dispatch] = useReducer(reducer, initialState)

    const checkData=()=>{

        if(isLoading){
            dispatch({
                type:LOAD_PRODUCTS_BEGIN,
            })
        }

        if(isError){
            dispatch({
                type:LOAD_PRODUCTS_FAIL,
            })
        }

        if(data!==null){
            dispatch({
                type:LOAD_PRODUCTS_SUCCESS,
                payload:data,
            })
        }
        

    }

    const openSidebar=()=>{
        dispatch({
            type:OPEN_SIDEBAR,
        })
    }

    const closeSidebar=()=>{
        dispatch({
            type:CLOSE_SIDEBAR,
        })
    }


    useEffect(() => {
        checkData();
    }, [isLoading])


 







    const contextValue={
        ...state,
        openSidebar,
        closeSidebar,
    }

    return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>
}


const useProductsContext=()=>{
    return useContext(ProductsContext);
}


export {useProductsContext,ProductsProvider}


