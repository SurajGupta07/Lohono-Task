import { useState } from "react";
import { useData } from "../contexts/data-context";
import { useTodoActions } from "../hooks/useTodoActions";

export const CreateNewTask = () => {
    const { closeHandler, taskClick } = useTodoActions();
    const { setTitle, setDescription } = useData();
    const [taskWindow, setTaskWindow] = useState(false);
    const [showTaskButton, setShowTaskButton] = useState(true);

    return (
        <div>
            {showTaskButton && (
                <button onClick={() => taskClick(setTaskWindow, setShowTaskButton)}>
                    Create Task
                </button>
            )}
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
