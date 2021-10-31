import { useData } from "../contexts/data-context";
import { BASE_API } from "../constants/constant";

export const useApi = () => {
    const { setData } = useData();

    async function getData() {
        const response = await fetch(`${BASE_API}`);
        let files = await response.json();
        setData(files);
    }
    return { getData };
};