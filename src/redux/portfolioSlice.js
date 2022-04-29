import { createSlice, configureStore } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: { delete: "", token: "", price: "", qty: "" },
    reducers: {
        setToken: (state, action) => {
            // console.log(state.token, action.payload);
            state.token = action.payload;
        },
        setPrice: (state, action) => {
            // console.log(state.price, action.payload);
            state.price = action.payload;
        },
        setQty: (state, action) => {
            // console.log(state.token, action.payload);
            state.qty = action.payload;
        },
        handleSubmit: (state, action) => {
            // state.submission = action.payload.submission;
            state.token = "";
            state.price = "";
            state.qty = "";
        },
        setDelete: (state, action) => {
            state.delete = action.payload;
        },
        handleReset: (state, action) => {
            state.delete = "";
        },
    },
});

// const store = configureStore({
//     reducer: userSlice.reducer,
// });

export const portfolioActions = portfolioSlice.actions;

export default portfolioSlice.reducer;
