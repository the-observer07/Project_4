import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { username: "", name: "", password: "", auth: false },
    reducers: {
        login(state, action) {
            console.log("Logged In");
            state.username = action.payload;
            state.auth = true;
        },
        logout(state) {
            state.username = "";
            state.auth = false;
        },
        createRegistration: (state, action) => {
            state.username = action.payload.userName;
            state.name = action.payload.name;
            state.password = action.payload.password;
        },
    },
});

const store = configureStore({
    reducer: userSlice.reducer,
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
