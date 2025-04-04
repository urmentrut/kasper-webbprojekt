// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LiveTracker from "./pages/LiveTracker.jsx";
import CharacterStats from "./pages/CharacterStats.jsx";
import QuestLogs from "./pages/QuestLogs.jsx";
import BossTracker from "./pages/BossTracker.jsx";
import Achievements from "./pages/Achievements.jsx";
import Players from "./pages/Players.jsx"; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home Page */}
                <Route path="/LiveTracker" element={<LiveTracker />} />
                <Route path="/CharacterStats" element={<CharacterStats />} />
                <Route path="/QuestLogs" element={<QuestLogs />} />
                <Route path="/BossTracker" element={<BossTracker />} />
                <Route path="/Achievements" element={<Achievements />} />
                <Route path="/Players" element={<Players />} /> {/* Players CRUD Page */}
            </Routes>
        </Router>
    );
};

export default App;
