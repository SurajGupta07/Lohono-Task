import { useEffect } from "react";
import { useApi } from "../hooks/useApi";
import { useData } from "../contexts/data-context";

export const Home = () => {
    const { getData } = useApi();
    const { data } = useData();
    
    useEffect(() => {
        getData(); // eslint-disable-next-line
    }, []);

    return (
        <div className="home-container">
            {data?.map((list) => (
                <div key={list.id}>
                    <h2>{list.title}</h2>
                    <div className={`${list.completed ? "completed" : ""} `}>{list.description}</div>
                    <button>Tick</button>
                    <button>Delete</button>
                </div>
            ))}
        </div>
    );
};
