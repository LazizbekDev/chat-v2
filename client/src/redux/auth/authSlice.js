import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import auth from "./service.js";

const initialState = {
    user: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ""
}

export const signUp = createAsyncThunk(
    'auth/signup',
    async (user, thinkApi) => {
        try {
            return await auth.signUp(user)
        } catch (err) {
            const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();

            return thinkApi.rejectWithValue(message);
        }
    }
)
export const signIn = createAsyncThunk(
    'auth/signin',
    async (user, thinkApi) => {
        try {
            return await auth.signUp(user)
        } catch (err) {
            const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();

            return thinkApi.rejectWithValue(message);
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.isError = false
            })
            .addCase(signUp.rejected, (state, action) => {
                state.isLoading = false;
                state.isSucces = false;
                state.user = null;
                state.isError = true;
                state.message = action.payload;
            })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer