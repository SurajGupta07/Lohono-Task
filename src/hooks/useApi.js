import axios from "axios";
import { useData } from "../contexts/data-context";
import { BASE_API } from "../constants/constant";

export const useApi = () => {
    const { setData } = useData();

    async function getData() {
        const response = await axios.get(`${BASE_API}`);
        setData(response.data);
    }
    return { getData };
};