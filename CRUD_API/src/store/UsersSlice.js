import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get
export const getAllUsers = createAsyncThunk('getAllUsers', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://67af7f05dffcd88a6786da43.mockapi.io/info/info")
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message)
    }
})

// create

export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {

    try {
        const response = await axios.post("https://67af7f05dffcd88a6786da43.mockapi.io/info/info", data)
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message)
    }
})

//update

export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.put(`https://67af7f05dffcd88a6786da43.mockapi.io/info/info/${data.id}`, data)
        return response.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || error.message)
    }
})

// delete 

export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {

    try {
        await axios.delete(`https://67af7f05dffcd88a6786da43.mockapi.io/info/info/${id}`)
        return id;

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message)
    }
})

const UserSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchUser: [],
    },
    reducers: {
        searchUser: (state, action) => {
            state.searchUser = action.payload;
        }
    },

    extraReducers: (builder) => {

        //get........
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "something went wrong"
            })
        //create.....

        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload)

            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'something went wrong'
            })

        //update

        builder
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.map((user) => user.id === action.payload.id ? action.payload : user)
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.error = action.payload;
            })

        //delete

        builder
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter((user) => user.id !== action.payload)

            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.error = action.payload
            })
    }



})

export default UserSlice.reducer
export const { searchUser } = UserSlice.actions