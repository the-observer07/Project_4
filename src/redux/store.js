import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import otherReducer from "./other";

const store = configureStore({
    reducer: { user: userReducer, other: otherReducer },
});

export default store;
