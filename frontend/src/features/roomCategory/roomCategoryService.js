import axios from "axios";

import { API } from '../data/data'

const API_URL = API.ORIGIN + 'pages/roomCategory/';

// Register user
const getAllRoom = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

// CreateRoom
const createRoom = async (userData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, userData, config)
    return response.data
}

// DeleteRoom


const roomCategoryService = {
    getAllRoom,
    createRoom
}

export default roomCategoryService