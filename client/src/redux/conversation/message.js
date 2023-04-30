import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import message from "./service.js";

const initialState = {
    messages: [],
    isLoading: false,
    isSuccess: false,
    isError: false
}

export const sendMessage = createAsyncThunk(
    'message/send',
    async (messageData, thunkApi) => {
        try {
            await message.sendMessage(messageData);
            console.log(messageData)
        } catch (err) {
            const errorMessage = err?.response?.data?.err ? err.response.data.err : "Failed to send message";
            thunkApi.rejectWithValue(errorMessage);
        }
    }
)

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.messages = action.payload;
                state.isError = false
            })
            .addCase(sendMessage.rejected, (state) => {
                state.isLoading = false;
                state.isSucces = false;
                state.messages = null;
                state.isError = true;
            })
    }
});

export default messageSlice.reducer