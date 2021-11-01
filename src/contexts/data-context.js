import { useState, useContext, createContext } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [data, setData] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                title,
                setTitle,
                description,
                setDescription
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
