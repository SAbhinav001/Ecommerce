import {configureStore} from "@reduxjs/toolkit"
import shopSlice from "./shopSlice";

const store = configureStore({
    reducer:{
        Shop:shopSlice,

    },
})

export default store;