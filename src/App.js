import { Route, Routes } from "react-router-dom";
import "./App.css";
import Programme from "./Pages/Dashboard/Programme/Programme";
import Home from "./Pages/Home/Home";
import Modaltext from "./Shared/Modaltext";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<Programme />}></Route>
                <Route path="/modal" element={<Modaltext />}></Route>
            </Routes>
        </div>
    );
}

export default App;
