// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Runetracker</h1>
                <p>Your journey starts here. Explore your character's stats, quests, achievements, and more!</p>
            </header>
            
            <nav className="home-nav">
                <ul>
                    <li><Link to="/LiveTracker">Live Tracker</Link></li>
                    <li><Link to="/CharacterStats">Character Stats</Link></li>
                    <li><Link to="/QuestLogs">Quest Logs</Link></li>
                    <li><Link to="/BossTracker">Boss Tracker</Link></li>
                    <li><Link to="/Achievements">Achievements</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;