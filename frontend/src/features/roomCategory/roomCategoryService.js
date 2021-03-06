import axios from "axios";

import { API } from '../data/data'

const API_URL = API.ORIGIN + 'pages/roomcategory/';

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
const deleteCategoryRoom = async (categoryRoomId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + categoryRoomId, config)

    return response.data
}

const roomCategoryService = {
    getAllRoom,
    createRoom,
    deleteCategoryRoom
}

export default roomCategoryService