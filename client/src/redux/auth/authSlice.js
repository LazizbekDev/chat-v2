import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
        console.log(user)
    }
)
export const signIn = createAsyncThunk(
    'auth/signin',
    async (user, thinkApi) => {
        console.log(user)
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer