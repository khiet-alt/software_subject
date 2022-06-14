import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/roomCategory/roomCategorySlice'
import guestRentRoomReducer from '../features/guestRenRoom/guestRenRoomSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    roomCategories: categoryReducer,
    guestRentRooms: guestRentRoomReducer
  },
});
