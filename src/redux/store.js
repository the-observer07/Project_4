import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import portfolioReducer from "./portfolioSlice";
// import otherReducer from "./other";
import watchlistReducer from "./watchlistSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        portfolio: portfolioReducer,
        watchlist: watchlistReducer,
    },
});

export default store;
