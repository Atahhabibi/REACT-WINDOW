import { CLEAR_CART, GET_ID, GET_ORDER_TOTAL, HANDLE_AMOUNT, HANDLE_CART_ITEM, HANDLE_CART_ITEM_AMOUNT, HANDLE_IMAGE, HANDLE_MAIN_COLOR, LOAD_PRODUCT_BEGIN, LOAD_PRODUCT_FAIL, LOAD_PRODUCT_SUCCESS, REMOVE_ITEM } from "./action";


const reducer=(state,action)=>{



    if(action.type===GET_ID){

        return {...state,id:action.payload};
    }

    if(action.type===LOAD_PRODUCT_BEGIN){
        return {...state,isLoading:true,isError:false};
    }

    if(action.type===LOAD_PRODUCT_FAIL){
        return {...state,isLoading:false,isError:true};
    }

    if(action.type===LOAD_PRODUCT_SUCCESS){
        return {...state,single_product:action.payload,isLoading:false,isError:false};
    }

    if(action.type===HANDLE_IMAGE){

        return {...state,imageIndex:action.payload};
    }

    if(action.type===HANDLE_MAIN_COLOR){

        return {...state,colorIndex:action.payload};
    }

    if(action.type==HANDLE_AMOUNT){

        const name=action.payload;
        const stock=state.single_product.stock;

        let amount=state.itemAmount;

        if(name==='inc'){
            amount+=1;
            if(amount>stock){
                amount=stock;
            }
           
        }

        if(name==='dec'){
            amount-=1;
            if(amount<1){
                amount=1;
            }

        }

        return {...state,itemAmount:amount}
    }

    if(action.type===HANDLE_CART_ITEM){

        const id=state.id;
        const colors=state.single_product.colors;
        const color=colors[state.colorIndex];
        const price=state.single_product.price;
        const stock=state.single_product.stock;
        const img=state.single_product.images[0].thumbnails.large.url;
        const amount=state.itemAmount;
        const name=state.single_product.name;
        let newProduct={};


        const product=state.cart.find((item)=>item.id===id + color);

        if(product){

            state.cart.map((item)=>{
                if(item.id===product.id){
                    item.amount++;

                    if(item.stock<item.amount){
                        item.amount=item.stock;
                    }
                }
            })

          localStorage.setItem('cart',JSON.stringify(state.cart));

          return {...state, colorIndex:0,itemAmount:1,cart:[...state.cart]}

        }else{

          newProduct={

              id:id+color,
              color:color,
              price:price,
              image:img,
              amount:amount,
              stock:stock,
              name:name,

          }

          localStorage.setItem('cart',JSON.stringify([...state.cart,newProduct]));

          return {...state,colorIndex:0,itemAmount:1,cart:[...state.cart,newProduct]};
        }

    }

    if(action.type===HANDLE_CART_ITEM_AMOUNT){

        const {id,name}=action.payload;

        const cart=state.cart;

        cart.map((item)=>{

            if(item.id===id){

                if(name==='inc'){
                    item.amount++;

                    if(item.amount>item.stock){
                        item.amount=item.stock;
                    }
                }

                if(name==='dec'){
                    item.amount--;

                    if(item.amount<1){
                        item.amount=1;
                    }
                }
                

            }
        })

        localStorage.setItem('cart',JSON.stringify(state.cart));

        return {...state}
    }

    if(action.type===REMOVE_ITEM){

        const id =action.payload;
        const newCart=state.cart.filter((item)=>item.id!==id);

        localStorage.setItem('cart',JSON.stringify(newCart));

        return {...state,cart:newCart};
    }

    if(action.type===GET_ORDER_TOTAL){

        const {totalItems,totalOrder}=state.cart.reduce((total,item)=>{

            const {price,amount}=item;


            total.totalItems+=amount;
            total.totalOrder+=(price*amount)


            return total;

        },{totalItems:0,totalOrder:0})

     

        return {...state,totalItems,totalOrder}
    }

    if(action.type===CLEAR_CART){
        localStorage.setItem('cart',JSON.stringify([]))
        return {...state,cart:[]}
    }



    return {...state}

}


export default reducer;