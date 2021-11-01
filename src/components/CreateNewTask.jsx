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
                <div className="create-button__container">
                    <button
                        className="button-create"
                        onClick={() =>
                            taskClick(setTaskWindow, setShowTaskButton)
                        }
                    >
                        Create Task
                    </button>
                </div>
            )}
            {taskWindow && (
                <div>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add new task!</h4>
                                <button
                                    className="close-btn"
                                    onClick={() => {
                                        setTaskWindow(false);
                                        setShowTaskButton(true);
                                    }}
                                >
                                    ✖
                                </button>
                            </div>
                            <input
                                className="input-title"
                                type="text"
                                placeholder="Enter title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                className="input-description"
                                placeholder="Enter description"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>{" "}
                            <div className="modal-footer">
                                <button
                                    className="btn-modal-save"
                                    onClick={closeHandler}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
