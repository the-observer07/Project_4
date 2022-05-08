import { createSlice, configureStore } from "@reduxjs/toolkit";

const coingeckoSlice = createSlice({
    name: "geckoAPI",
    initialState: {
        mainTableIds: [],
        value: "",
        click: false,
        // delete: false,
        // token: "",
        // price: "",
        // qty: "",
        // editMode: false,
        // recalledTokens: "",
        // editedToken: "",
        // editedPrice: "",
        // editedQty: "",
        // deleteMode: false,
        // submit: false,
        // recalledPrice: "",
        // reaclledQty: "",
    },
    reducers: {
        setMainTableIds: (state, action) => {
            // console.log(state.token, action.payload);
            state.mainTableIds = action.payload;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        },
        setClick: (state, action) => {
            state.click = true;
        },
    },
});

// const store = configureStore({
//     reducer: userSlice.reducer,
// });

export const geckoAPIActions = coingeckoSlice.actions;

export default coingeckoSlice.reducer;
