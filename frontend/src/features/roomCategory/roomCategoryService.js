import axios from "axios";

import { API } from '../data/data'

const API_URL = API.ORIGIN + 'pages/roomCategory/';

// Register user
const getAllRoom = async (userData) => {
    const response = await axios.get(API_URL, userData)

    if (response.data) {
        localStorage.setItem('roomCategory', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const createRoom = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const deleteRoom = () => {
}

const roomCategoryService = {
    getAllRoom,
    createRoom,
    deleteRoom
}

export default roomCategoryService