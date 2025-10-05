import { configureStore } from "@reduxjs/toolkit";
import { BlogReducer, ContactReducer, modal, primaryDataReducer, ProjectReducer, skillReducer } from "./Slice";
const store=configureStore({
    reducer:{
        flipModal:modal,
        skillState:skillReducer,
        Contacts:ContactReducer,
        PrimaryData:primaryDataReducer,
        ProjectData:ProjectReducer,
        BlogData:BlogReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;