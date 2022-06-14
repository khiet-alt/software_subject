import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import guestRentRoomService from './guestRenRoomService'

const initialState = {
    guestRentRooms: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create categoryRoom
export const createGuestRentRoom = createAsyncThunk('guestRentRoom/create', async (guestRentRoom, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await guestRentRoomService.createGuestRentRoom(guestRentRoom, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//Get room
export const getAllGuestRentRoom = createAsyncThunk('guestRentRoom/get', async (_, thunkAPI) => {
    try {
        return await guestRentRoomService.getAllGuestRentRoom()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// Delete user goal
export const deleteGuestRentRoom = createAsyncThunk('guestRentRoom/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await guestRentRoomService.deleteGuestRentRoom(id, token)

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const guestRentRoomSlice = createSlice({
    name: 'guestRenRoom',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGuestRentRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGuestRentRoom.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.guestRentRooms.push(action.payload)
            })
            .addCase(createGuestRentRoom.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllGuestRentRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllGuestRentRoom.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.guestRentRooms = action.payload
            })
            .addCase(getAllGuestRentRoom.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteGuestRentRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGuestRentRoom.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.guestRentRooms = state.guestRentRooms.filter((room) => room._id !== action.payload.id)
            })
            .addCase(deleteGuestRentRoom.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = guestRentRoomSlice.actions
export default guestRentRoomSlice.reducer