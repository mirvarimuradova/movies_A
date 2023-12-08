import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./Slice/listSlice";

export const store=configureStore({
reducer:{
    list:listSlice,
},
})
