import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice.js";
import usersReducer from "./redux/users/users.js";
import messageReducer from "./redux/conversation/message.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        messages: messageReducer
    }
})