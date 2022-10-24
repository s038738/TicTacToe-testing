import { configureStore } from "@reduxjs/toolkit";
import valueManagement from "./screens/tabScreens/valueManagement";

export const store = configureStore({
    reducer: {
        value: valueManagement
    },
})