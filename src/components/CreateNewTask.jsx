import { useState } from "react";

export const CreateNewTask = () => {
    const [taskWindow, setTaskWindow] = useState(false);
    const [showTaskButton, setShowTaskButton] = useState(true);

    const taskClick = function () {
        setTaskWindow(true);
        setShowTaskButton(false);
    };

    return (
        <div>
            {showTaskButton && <button onClick={taskClick}>Create Task</button>}
            {taskWindow && (
                <div>
                    <input type="text" placeholder="Enter title" />
                    <textarea placeholder="Enter description"></textarea>
                </div>
            )}
        </div>
    );
};
