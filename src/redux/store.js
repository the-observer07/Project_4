import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import portfolioReducer from "./portfolioSlice";
// import otherReducer from "./other";
import watchlistReducer from "./watchlistSlice";
import geckoReducer from "./coingeckoAPISlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        portfolio: portfolioReducer,
        watchlist: watchlistReducer,
        api: geckoReducer,
    },
});

export default store;
