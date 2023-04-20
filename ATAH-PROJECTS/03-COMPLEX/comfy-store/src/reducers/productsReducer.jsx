import { CLOSE_SIDEBAR, LOAD_PRODUCTS_BEGIN, LOAD_PRODUCTS_FAIL, LOAD_PRODUCTS_SUCCESS, OPEN_SIDEBAR } from "./action";


const reducer=(state,action)=>{

    if(action.type===LOAD_PRODUCTS_BEGIN){

        return {...state,isLoading:true}

    }
    
    if(action.type===LOAD_PRODUCTS_FAIL){

        return {...state,isLoading:false,isError:true}

    }
    
    if(action.type===LOAD_PRODUCTS_SUCCESS){

        let filterFeatured=action.payload.filter((item)=>item.featured);

        return {...state,isLoading:false,isError:false,products:action.payload,featuredProducts:filterFeatured}

    }

      
    if(action.type===OPEN_SIDEBAR){

        return {...state,isSidebarOpen:true}

    }
    
    if(action.type===CLOSE_SIDEBAR){

        return {...state,isSidebarOpen:false}

    }
    


    return {...state}


}



export default reducer;