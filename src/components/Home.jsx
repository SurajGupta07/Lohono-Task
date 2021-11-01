import { useEffect } from "react";
import { useData } from "../contexts/data-context";
import { useApi } from "../hooks/useApi";
import { useTodoActions } from "../hooks/useTodoActions";

export const Home = () => {
    const { getData } = useApi();
    const { deleteTodo, completeHandler } = useTodoActions();
    const { data } = useData();

    useEffect(() => {
        getData(); // eslint-disable-next-line
    }, []);

    return (
        <div className="home-container">
            {data?.map((list) => (
                <div key={list.id} className="home-notes">
                    <h2 className="center" style={{ marginBottom: "1rem" }}>
                        {list.title}
                    </h2>
                    <div className={`${list.completed ? "completed" : ""} `}>
                        {list.description}
                    </div>
                    <div className="center">
                        <button
                            className="complete-btn margin"
                            onClick={() => completeHandler(list)}
                        >
                            ✔
                        </button>
                        <button
                            className="trash-btn margin"
                            onClick={() => deleteTodo(list.id)}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
