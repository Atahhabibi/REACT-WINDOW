import { CHANGE_AMOUNT, CLEAR_CART, GET_TOTAL_AMOUNT, LOAD_DATA, REMOVE_ITEM } from "./Actions";

 const reducer=(state,action)=>{

    if(action.type===LOAD_DATA){

        return {...state,cart:action.payload}
    }

    if(action.type===REMOVE_ITEM){
        
        const newCart=state.cart.filter((item)=>item.id!==action.payload)
        return {...state,cart:newCart}
    }

    if(action.type===CLEAR_CART){

        return {...state,cart:[]}
    }

 
    if(action.type===CHANGE_AMOUNT){

        const{id,name}=action.payload;

        let tempCart=state.cart.map((item)=>{

            if(item.id===id){

                if(name==='inc'){
                    return {...item,amount:item.amount+1}
                }

                if(name==='dec'){
                    return {...item,amount:item.amount-1}
                }
            }

            return item;
        }).filter((item)=>item.amount>=1);

        
        return {...state,cart:tempCart}
    }

    if(action.type===GET_TOTAL_AMOUNT){

        const {total,amount}=state.cart.reduce((result,item)=>{

            const {amount,price}=item;

            result.total+=amount*price;
            result.amount+=amount;

           return result;

        },{total:0,amount:0})




        return {...state,total:total.toFixed(2),amount}
    }



 
    return {...state}

}


export default reducer;