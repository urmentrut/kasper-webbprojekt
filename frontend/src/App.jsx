// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LiveTracker from "./pages/LiveTracker";
import CharacterStats from "./pages/CharacterStats";
import QuestLogs from "./pages/QuestLogs";
import BossTracker from "./pages/BossTracker";
import Achievements from "./pages/Achievements";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LiveTracker" element={<LiveTracker />} />
                <Route path="/CharacterStats" element={<CharacterStats />} />
                <Route path="/QuestLogs" element={<QuestLogs />} />
                <Route path="/BossTracker" element={<BossTracker />} />
                <Route path="/Achievements" element={<Achievements />} />
            </Routes>
        </Router>
    );
};

export default App;

