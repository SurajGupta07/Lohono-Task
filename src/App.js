import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CreateNewTask } from "./components/CreateNewTask";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/list" element={<CreateNewTask />} />
            </Routes>
        </div>
    );
}

export default App;
