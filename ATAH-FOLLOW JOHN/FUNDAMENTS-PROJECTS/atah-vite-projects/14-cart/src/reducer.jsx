

const reducer=(state,action)=>{

    if(action.type==='CLEAR_CART'){
        return {...state,cart:[]};
    }

    if(action.type==='CLEAR_ITEM'){
        const newCart=state.cart.filter((item)=>item.id!==action.payload.id)
        return {...state,cart:newCart};
    }

    // if(action.type==='INCREASE'){
        
    //     let newCart=state.cart.map((item)=>{
            
    //         if(item.id===action.payload.id){
    //            return {...item,amount:item.amount+1}
    //         }
    //         return item;
    //     })
        
    //     return {...state,cart:newCart};
    // }

    // if(action.type==='DECREASE'){
        
    //     const newCart=state.cart.map((item)=>{
            
    //         if(item.id===action.payload.id){
    //             return {...item,amount:item.amount-1}
    //         }
    //         return item;
    //     }).filter((item)=>item.amount!==0);

        
    //     return {...state,cart:newCart};
    // }


    if(action.type==='GET_TOTALS'){

        const {total,amount}=state.cart.reduce((result,item)=>{
            

            result.total+=(item.amount*item.price);
            result.amount+=item.amount;

            return result;

        },{total:0,amount:0,})

        
        
        return{...state,amount:amount,total:parseFloat(total.toFixed(2))}
    }

    if(action.type==='LOADING'){
        return {...state,loading:true};
    }

    if(action.type==='DISPLAY_ITEMS'){
        console.log('its me');
        return {...state,cart:action.payload,loading:false}
    }


    if(action.type==='TOGGLE_AMOUNT'){

      let tempCart=state.cart.map((cartItem)=>{

          if(cartItem.id===action.payload.id){

             if(action.payload.type==='INCREASE'){
                return {...cartItem,amount:cartItem.amount+1}
             }

             if(action.payload.type==='DECREASE'){
                return {...cartItem,amount:cartItem.amount-1}
             }

          }

          return cartItem;


      }).filter((item)=>item.amount!==0);


      return {...state,cart:tempCart}
       
    }

   
    throw new Error('no matching action type')
}


export default reducer;