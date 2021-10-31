import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../constants/constant";
import { useData } from "../contexts/data-context";

export const useTodoActions = () => {
    const navigate = useNavigate();
    const { description, title, setData } = useData();

    const taskClick = function (setTaskWindow, setShowTaskButton) {
        setTaskWindow(true);
        setShowTaskButton(false);
    };

    const closeHandler = async function () {
        try {
            const response = await axios.post(`${BASE_API}`, {
                id: Math.random().toFixed(3) * 1000,
                title,
                description,
                completed: false,
            });
            if (response.status === 201) {
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTodo = async function (list) {
        setData((prevItem) => prevItem.filter((listItem) => listItem.id !== list.id));
    };

    return { closeHandler, taskClick, deleteTodo };
};
