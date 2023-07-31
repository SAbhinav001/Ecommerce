import { createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
    name: 'Shop',
    initialState: {
        productData:[],
        userInfo:null,
    },
    reducers:{
        addToCart:(state, action)=>{
            const isAvail = state.productData.find((item)=>(item._id ===action.payload._id))

            if(isAvail){
                isAvail.Quantity += action.payload.Quantity
            }
            else{
                state.productData.push(action.payload)
            }
        }
    }
})

export const {addToCart} = ShopSlice.actions;
export default ShopSlice.reducer;