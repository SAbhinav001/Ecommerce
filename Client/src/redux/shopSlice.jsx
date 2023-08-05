import { createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
  name: "Shop",
  initialState: {
    productData: [],
    userInfo: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const isAvail = state.productData.find(
        (item) => item._id === action.payload._id
      );
      
      if (!isAvail) {
        state.productData.push(action.payload);
      }
    },
    IncreaseQuantity: (state,action)=>{
        const item = state.productData.find(
            (item) => item._id === action.payload
          );

          item.Quantity += 1
    },
    DecreseQuantity: (state,action)=>{
        const item = state.productData.find(
            (item) => item._id === action.payload
          );

          item.Quantity -= 1
    },

    clearitem:(state,action)=>{
        const index=state.productData.findIndex(
            (item) => item._id === action.payload
          );

          state.productData.splice(index, 1)
    },

    reset:(state)=>{
            state.productData = []
    }
  },
});

export const { addToCart, IncreaseQuantity,DecreseQuantity,clearitem,reset } = ShopSlice.actions;
export default ShopSlice.reducer;
