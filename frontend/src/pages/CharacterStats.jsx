/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const CharacterStats = () => {
  const [username, setUsername] = useState("");
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [savedStats, setSavedStats] = useState([]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Fetch stats from TempleOSRS API
  const fetchStats = async () => {
    if (!username) {
      setError("Please enter a valid username.");
      return;
    }

    setError("");
    setMessage("");

    try {
      const response = await axios.get(
        `https://templeosrs.com/api/player_stats.php?player=${username}`
      );

      setStats(response.data);

      // Send fetched stats to backend
      await saveStatsToBackend(response.data);
    } catch (error) {
      setError("Failed to fetch stats. Please check the username.");
    }
  };

  // Send stats to Flask backend
  const saveStatsToBackend = async (statsData) => {
    try {
      await axios.post("http://localhost:5000/api/save-stats", {
        username,
        stats: statsData.data,
      });
      setMessage("Stats saved successfully!");
    } catch (error) {
      setError("Failed to save stats to the database.");
    }
  };

  // Fetch saved stats from backend
  const fetchSavedStats = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get-stats");
      setSavedStats(response.data);
    } catch (error) {
      setError("Failed to fetch saved stats.");
    }
  };

  return (
    <div>
      <h2>Character Stats</h2>

      <input
        type="text"
        placeholder="Enter OSRS Username"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={fetchStats}>Fetch Stats</button>
      <button onClick={fetchSavedStats}>Get Saved Stats</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      {stats && (
        <div>
          <h3>Stats for {stats.data.info.Username}</h3>
          <ul>
            <li>Attack Level: {stats.data.Attack_level}</li>
            <li>Defense Level: {stats.data.Defence_level}</li>
            <li>Strength Level: {stats.data.Strength_level}</li>
            <li>Hitpoints Level: {stats.data.Hitpoints_level}</li>
            <li>Ranged Level: {stats.data.Ranged_level}</li>
            <li>Prayer Level: {stats.data.Prayer_level}</li>
            <li>Magic Level: {stats.data.Magic_level}</li>
            <li>Cooking Level: {stats.data.Cooking_level}</li>
            <li>Woodcutting Level: {stats.data.Woodcutting_level}</li>
            <li>Fletching Level: {stats.data.Fletching_level}</li>
            <li>Fishing Level: {stats.data.Fishing_level}</li>
            <li>Firemaking Level: {stats.data.Firemaking_level}</li>
            <li>Crafting Level: {stats.data.Crafting_level}</li>
            <li>Smithing Level: {stats.data.Smithing_level}</li>
            <li>Mining Level: {stats.data.Mining_level}</li>
            <li>Herblore Level: {stats.data.Herblore_level}</li>
            <li>Agility Level: {stats.data.Agility_level}</li>
            <li>Thieving Level: {stats.data.Thieving_level}</li>
            <li>Slayer Level: {stats.data.Slayer_level}</li>
            <li>Farming Level: {stats.data.Farming_level}</li>
            <li>Runecrafting Level: {stats.data.Runecraft_level}</li>
            <li>Hunter Level: {stats.data.Hunter_level}</li>
            <li>Construction Level: {stats.data.Construction_level}</li>
          </ul>
        </div>
      )}

      {savedStats.length > 0 && (
        <div>
          <h3>Saved Stats from Database</h3>
          <ul>
            {savedStats.map((user, index) => (
              <li key={index}>
                <strong>{user.username}</strong>: Attack {user.stats.Attack_level}, Defense {user.stats.Defence_level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterStats;
