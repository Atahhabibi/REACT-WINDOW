// import data from '../../components/data';
import axios from 'axios';
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState={
    cartItems:[],
    amount:4,
    total:0,
    isLoading:true,
}


export const getCartItems=createAsyncThunk('cart/getCartItems',async(name,thunkAPI)=>{

    try {

        const resp=await axios(url);
        return resp.data;
        
    } catch (error) {
       return  thunkAPI.rejectWithValue('something went wrong')
    }

   
})







const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{

        clearCart:(state)=>{
            state.cartItems=[];
        },

        removeItem:(state,action)=>{
            const itemId=action.payload;
            state.cartItems=state.cartItems.filter((item)=>item.id!==itemId)
        },

        increase:(state,action)=>{
            const itemId=action.payload;
            let singleItem=state.cartItems.find((item)=>item.id===itemId);
            singleItem.amount=singleItem.amount+1;
           
        },

        decrease:(state,action)=>{
            const itemId=action.payload;
            let singleItem=state.cartItems.find((item)=>item.id===itemId);
            singleItem.amount=singleItem.amount-1;

            if(singleItem.amount<1){
                state.cartItems=state.cartItems.filter((item)=>item.id!==itemId)
            }
              
        },

        
        calculateTotal:(state)=>{

            const {total,amount}=state.cartItems.reduce((result,item)=>{

              result.amount+=item.amount;
              result.total+=(item.price * item.amount);

             return result;

            },{total:0,amount:0})

           
            state.amount=amount;
            state.total=total.toFixed(2);
        
        }
        
        
    },


    extraReducers:(builder)=>{

        builder
        
        .addCase(getCartItems.pending,(state)=>{
            state.isLoading=true;
        })

        .addCase(getCartItems.fulfilled,(state,action)=>{
              
            state.isLoading=false;
            state.cartItems=action.payload;

        })

        .addCase(getCartItems.rejected,(state)=>{
            state.isLoading=false;
        })


    }




})




// console.log(cartSlice);

export const{clearCart,removeItem,calculateTotal,increase,decrease}=cartSlice.actions;

export default cartSlice.reducer;


