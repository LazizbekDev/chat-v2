import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice.js";
import usersSlice from "./redux/users/users.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersSlice
    }
})