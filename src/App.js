import { Routes, Route } from "react-router-dom";
import "./App.css";
import { CreateNewTask } from "./components/CreateNewTask";
import { Home } from "./components/Home";
import { Header } from "./components/Header";

function App() {
    return (
        <div>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<CreateNewTask />} />
            </Routes>
        </div>
    );
}

export default App;
