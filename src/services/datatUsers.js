import axios from "axios"
import { endpoints } from "./enpoints"

export const getUsers = async () => {
    try {
        const { data } = await axios.get(endpoints.users);
        return data
    } catch (error) {
        console.log(error);
        return error;
    }
}