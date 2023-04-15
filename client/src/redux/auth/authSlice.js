import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer