import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import message from "./service.js";

const initialState = {
    messages: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMsg: ""
}

export const sendMessage = createAsyncThunk(
    'message/send',
    async (messageData, thunkApi) => {
        try {
            return await message.send(messageData);
        } catch (err) {
            const errorMessage = err?.response?.data?.err ? err.response.data.err : "Failed to send message";
            thunkApi.rejectWithValue(errorMessage);
        }
    }
)

export const getMessage = createAsyncThunk(
    'message/get',
    async (data, thunkAPI) => {
        try {
            return await message.get(data);
        } catch (err) {
            const errorMessage = err?.response?.data?.err ? err.response.data.err : "Failed to get messages";
            thunkAPI.rejectWithValue(errorMessage);
        }
    }
)

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(sendMessage.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMsg = action.payload;
            })
            .addCase(getMessage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMessage.fulfilled, (state, action) => {
                state.messages = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(getMessage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMsg = action.payload;
            })
    }
});

export const {reset} = messageSlice.actions;
export default messageSlice.reducer;