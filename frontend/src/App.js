import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartModal from "./components/startModal";
import Game from "./pages/game/game";

import './App.css';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<StartModal/>}></Route>
                    <Route path="/functionalitati" element={<Game/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;