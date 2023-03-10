import axios from "axios";
import { endpoints } from "./enpoints";

export const getOrders = async () => {
    try {
        const { data } = await axios.get(enpoints.orders);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}