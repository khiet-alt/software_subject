import axios from "axios";

import { API } from '../data/data'

const API_URL = API.ORIGIN + 'pages/guestrentroom/';

// Register user
const getAllGuestRentRoom = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

// CreateRoom
const createGuestRentRoom = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, userData, config)
    return response.data
}

// DeleteRoom
const deleteGuestRentRoom = async (guestRentRoomId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + guestRentRoomId, config)

    return response.data
}

const guestRentRoomService = {
    getAllGuestRentRoom,
    createGuestRentRoom,
    deleteGuestRentRoom
}

export default guestRentRoomService