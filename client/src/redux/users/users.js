import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import service from "./service.js";

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    isSuccess: false
}

export const getAllUsers = createAsyncThunk(
    'users/all',
    async (user, thunkApi) => {
        try {
            return await service.allUsers();
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message ? err.response.data.message : "Something went to wrong");
        }
    }
)

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.users = action.payload;
                state.isError = false
            })
            .addCase(getAllUsers.rejected, (state) => {
                state.isLoading = false;
                state.isSucces = false;
                state.users = null;
                state.isError = true;
            })
    }
});

export const {reset} = usersSlice.actions
export default usersSlice.reducer