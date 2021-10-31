import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/data-context";

export const CreateNewTask = () => {
    const navigate = useNavigate();
    const { setTitle, setDescription, description, title } = useData();
    const [taskWindow, setTaskWindow] = useState(false);
    const [showTaskButton, setShowTaskButton] = useState(true);

    const taskClick = function () {
        setTaskWindow(true);
        setShowTaskButton(false);
    };

    const closeHandler = async function () {
        try {
            const response = await axios.post("http://localhost:3000/todos", {
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

    return (
        <div>
            {showTaskButton && <button onClick={taskClick}>Create Task</button>}
            {taskWindow && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter description"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button onClick={closeHandler}>Close</button>
                </div>
            )}
        </div>
    );
};
