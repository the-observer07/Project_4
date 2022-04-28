import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import portfolioReducer from "./portfolioSlice";
// import otherReducer from "./other";

const store = configureStore({
    reducer: { user: userReducer, portfolio: portfolioReducer },
});

export default store;
