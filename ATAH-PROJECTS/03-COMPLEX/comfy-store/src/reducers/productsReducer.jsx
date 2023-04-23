
import { CHANGE_VIEW, CLEAR_FILTERS, CLOSE_SIDEBAR, FILTER_PRODUCTS, LOAD_PRODUCTS_BEGIN, LOAD_PRODUCTS_FAIL, LOAD_PRODUCTS_SUCCESS, OPEN_SIDEBAR } from "./action";


const reducer=(state,action)=>{

    if(action.type===LOAD_PRODUCTS_BEGIN){

        return {...state,isLoading:true}

    }
    
    if(action.type===LOAD_PRODUCTS_FAIL){

        return {...state,isLoading:false,isError:true}

    }
    
    if(action.type===LOAD_PRODUCTS_SUCCESS){

        let filterFeatured=action.payload.filter((item)=>item.featured);
        let filteredProducts=[...action.payload];
        filteredProducts=filteredProducts.sort((a,b)=>a.price - b.price);


        let maxPrice=action.payload.map((item)=>item.price);
         maxPrice=Math.max(...maxPrice);

        let minPrice=action.payload.map((item)=>item.price);
         minPrice=Math.min(...minPrice);

         let price=maxPrice;
         
    
        return {...state,isLoading:false,isError:false,products:action.payload,featuredProducts:filterFeatured,filteredProducts,filters:{...state.filters,minPrice,maxPrice,price}}

    }

      
    if(action.type===OPEN_SIDEBAR){

        return {...state,isSidebarOpen:true}

    }
    
    if(action.type===CLOSE_SIDEBAR){

        return {...state,isSidebarOpen:false}

    }

    if(action.type===FILTER_PRODUCTS){

        const {name,value}=action.payload;
        let filters={...state.filters};


        let filteredProducts=[...state.products];
        
        if(name==='color'){

            filters={...filters,[name]:value};

            const newFilterProducts=[];

            filteredProducts=filteredProducts.map((item)=>{

               item.colors.map((colorItem)=>{

                    if(colorItem===value){
                        newFilterProducts.push(item)
                    }

                });

            });


            filteredProducts=[...newFilterProducts];

        }

        if(name=='company'){
            filters={...filters,[name]:value};
           filteredProducts=filteredProducts.filter((item)=>item[name]===value)
            
        }

        if(name=='category'){
            filters={...filters,[name]:value};
           filteredProducts=filteredProducts.filter((item)=>item[name]===value)  
        }


        if(name==='price'){
            const newPrice=parseInt(value);
            filters={...filters,[name]:value};
            filteredProducts=filteredProducts.filter((item)=>item.price<=newPrice);
        }

        if(name==='shipping'){
            filters={...filters,[name]:value};
          
            filteredProducts=filteredProducts.filter((item)=>item.shipping);
        }

        if(name==='search'){
            filters={...filters,[name]:value};
    
            filteredProducts=filteredProducts.filter((item)=>item.name.startsWith(value));
        }

        if(value==='all'){
            filters={...filters,[name]:value};
        
            filteredProducts=[...state.products]
        }

        if(name==='sort'){
            filters={...filters,[name]:value};
    

            if(value==='Price(Lowest)'){
                filteredProducts=filteredProducts.sort((a,b)=>a.price - b.price);
            }
            if(value==='Price(Highest)'){
                filteredProducts=filteredProducts.sort((a,b)=>b.price - a.price);
            }
            if(value==='Name(A-Z)'){
                filteredProducts=filteredProducts.sort();
            }
            if(value==='Name(Z-A)'){
                filteredProducts=filteredProducts.reverse();
            }
            
        }



        return {...state,filteredProducts,filters}

    }

    if(action.type===CHANGE_VIEW){
        return {...state,gridView:!state.gridView}
    }


    if(action.type===CLEAR_FILTERS){

        let maxPrice=state.products.map((item)=>item.price);
        maxPrice=Math.max(...maxPrice);

        let price=maxPrice;



        let filters={
            search:'',
            category:'all',
            company:'all',
            color:'all',
            minPrice:0,
            maxPrice:0,
            price:0,
            shipping:false,
            sort:'Price(Lowest)',
        };

        let filteredProducts=[...state.products];

        return {...state,filters:{...filters,price,maxPrice},filteredProducts}
    }


    


    return {...state}


}



export default reducer;