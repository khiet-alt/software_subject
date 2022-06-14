import axios from "axios";

import { API } from '../data/data'

const API_URL = API.ORIGIN + 'pages/roomCategory/';

// Register user
const getAllRoom = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

// CreateRoom
const createRoom = async (userData) => {
    const response = await axios.post(API_URL, userData)
    return response.data
}

const roomCategoryService = {
    getAllRoom,
    createRoom
}

export default roomCategoryService