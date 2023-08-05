import {configureStore ,combineReducers} from "@reduxjs/toolkit"
import shopSlice from "./shopSlice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  import {persistReducer} from "redux-persist"

const reducer = combineReducers({
    Shop:shopSlice,
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    // reducer:{
    //     // Shop:shopSlice,

    // },
    reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store;