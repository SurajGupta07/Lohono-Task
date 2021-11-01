import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../constants/constant";
import { useData } from "../contexts/data-context";

export const useTodoActions = () => {
    const navigate = useNavigate();
    const { description, title, setData, data } = useData();

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

    const deleteTodo = async function (id) {
        try {
            const response = await axios.delete(`${BASE_API}/${id}`);
            if(response.status === 200) {
                setData(data.filter((listItem) => listItem.id !== id))
            }
        } catch (err) {
            console.log(err);
        }
    };

    const completeHandler = async function (list) {
        setData(
            data.map((item) => {
                if (item.id === list.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return { closeHandler, taskClick, deleteTodo, completeHandler };
};
