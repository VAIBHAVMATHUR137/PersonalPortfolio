import { configureStore } from "@reduxjs/toolkit";
import { ContactReducer, modal, skillReducer } from "./Slice";
const store=configureStore({
    reducer:{
        flipModal:modal,
        skillState:skillReducer,
        Contacts:ContactReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;