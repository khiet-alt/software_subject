import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import roomCategoryService from './roomCategoryService'

const initialState = {
    roomCategories: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create categoryRoom
export const createCategoryRoom = createAsyncThunk('roomCategory/create', async (room, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await roomCategoryService.createRoom(room, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//Get room
export const getAllRoom = createAsyncThunk('roomCategory/getRooms', async (_, thunkAPI) => {
    try {
        return await roomCategoryService.getAllRoom()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const categorySlice = createSlice({
    name: 'roomCategory',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCategoryRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCategoryRoom.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.roomCategories.push(action.payload)
            })
            .addCase(createCategoryRoom.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllRoom.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.roomCategories = action.payload
            })
            .addCase(getAllRoom.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = categorySlice.actions
export default categorySlice.reducer