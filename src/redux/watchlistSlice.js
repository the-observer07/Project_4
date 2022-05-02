import { createSlice, configureStore } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: {
        // delete: "",
        token: "",
        price: "",
        qty: "",
        // editMode: false,
        // recall: "",
        // recalledPrice: "",
        // reaclledQty: "",
    },
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
        // setDelete: (state, action) => {
        //     state.delete = action.payload;
        // },
        // handleReset: (state, action) => {
        //     state.delete = "";
        // },
        // setEdit: (state, action) => {
        //     state.edit = action.payload;
        //     console.log(state.editMode);
        // },
        // setRecall: (state, action) => {
        //     console.log(action.payload);
        //     state.recalledToken = action.payload;
        //     state.recalledPrice = action.payload;
        //     state.reacalledQty = action.payload;

        //     // console.log(state.recalledToken);
        // },

        // // setRecallPrice: (state, action) => {
        // //     state.recalledPrice = action.payload;
        // //     console.log(state.recalledPrice);
        // // },
        // // setRecallQty: (state, action) => {
        // //     state.reacalledQty = action.payload;
        // //     console.log(state.reacalledQty);
        // // },
    },
});

// const store = configureStore({
//     reducer: userSlice.reducer,
// });

export const watchlistActions = watchlistSlice.actions;

export default watchlistSlice.reducer;
