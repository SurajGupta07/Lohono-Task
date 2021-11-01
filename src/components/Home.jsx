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
                <div key={list.id}>
                    <h2>{list.title}</h2>
                    <div className={`${list.completed ? "completed" : ""} `}>
                        {list.description}
                    </div>
                    <button className="complete-btn" onClick={() => completeHandler(list)}>✔</button>
                    <button
                        className="trash-btn"
                        onClick={() => deleteTodo(list)}
                    >
                        ✖
                    </button>
                </div>
            ))}
        </div>
    );
};
