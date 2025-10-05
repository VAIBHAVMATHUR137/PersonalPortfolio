import { configureStore } from "@reduxjs/toolkit";
import { modal, skillReducer } from "./Slice";
const store=configureStore({
    reducer:{
        flipModal:modal,
        skillState:skillReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;