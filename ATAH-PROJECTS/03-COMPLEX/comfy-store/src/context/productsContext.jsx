import { createContext, useContext, useReducer,useEffect} from "react";
import reducer from '../reducers/productsReducer'
import useAxios from '../utils/useAxios';
import { LOAD_PRODUCTS_BEGIN,LOAD_PRODUCTS_SUCCESS,LOAD_PRODUCTS_FAIL, OPEN_SIDEBAR, CLOSE_SIDEBAR, FILTER_PRODUCTS, CHANGE_VIEW, CLEAR_FILTERS} from "../reducers/action";
const productsUrl='/react-store-products';



const ProductsContext=createContext();

const initialState={
    products:[],
    featuredProducts:[],
    filteredProducts:[],

    filters:{
        search:'',
        category:'all',
        company:'all',
        color:'all',
        minPrice:0,
        maxPrice:0,
        shipping:false,
        price:0,
        sort:'Price(Lowest)',
    },

    gridView:true,
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



    const handleForm=(e)=>{
        e.preventDefault();
        let name=e.target.name;
        let value=e.target.value;
    
        if(name==='category'){
          value=e.target.dataset.id;
        }

        if(name==='color'){
            value=e.target.dataset.id;
        }

        if(name==='shipping'){
            value=e.target.checked;
        }


        dispatch({
            type:FILTER_PRODUCTS,
            payload:{name,value}
        })

    }

    const changeView=()=>{
        dispatch({
            type:CHANGE_VIEW,
        })
    }

    const clearFilters=()=>{
        dispatch({
            type:CLEAR_FILTERS,
        })
    }




    const contextValue={
        ...state,
        openSidebar,
        closeSidebar,
        handleForm,
        changeView,
        clearFilters,
    }

    return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>
}


const useProductsContext=()=>{
    return useContext(ProductsContext);
}


export {useProductsContext,ProductsProvider}


