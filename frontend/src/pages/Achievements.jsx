/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAchievements = async () => {
    if (!username.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://127.0.0.1:5000/achievements/players/${username}/achievements`);
      setAchievements(response.data);
    } catch (err) {
      console.error("Error with fetching:", err);
      setError("Could not fetch achievements.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddAchievement = async () => {
    if (!newAchievement.trim() || !username.trim()) return;

    try {
      await axios.post(`http://127.0.0.1:5000/achievements/players/${username}/achievements`, {
        achievement: newAchievement,
      });

      setAchievements([...achievements, newAchievement]);
      setNewAchievement("");
    } catch (err) {
      console.error("Error with input:", err);
      setError("Coul not add achievement.");
    }
  };

  const handleDeleteAchievement = async (achievementToDelete) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/achievements/players/${username}/achievements`, {
        data: { achievement: achievementToDelete },
      });

      setAchievements(achievements.filter((a) => a !== achievementToDelete));
    } catch (err) {
      console.error("Error when delete:", err);
      setError("Could not delete achievement.");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-8">Achievements Tracker</h2>

      <div className="flex gap-6 mb-8">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-grow p-4 rounded text-black shadow"
        />
        <button
          onClick={fetchAchievements}
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-transform duration-150 px-8 py-4 rounded shadow"
        >
          Load
        </button>
      </div>

      {loading && <p className="mb-6">Loading achievements...</p>}
      {error && <p className="mb-6 text-red-400">{error}</p>}

      {username && (
        <>
          <div className="flex gap-6 mb-8">
            <input
              type="text"
              placeholder="New achievement"
              value={newAchievement}
              onChange={(e) => setNewAchievement(e.target.value)}
              className="flex-grow p-4 rounded text-black shadow"
            />
            <button
              onClick={handleAddAchievement}
              className="bg-green-600 hover:bg-green-700 active:scale-95 transition-transform duration-150 px-8 py-4 rounded shadow"
            >
              Add
            </button>
          </div>

          {achievements.length > 0 && (
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="bg-gray-800 p-4 rounded shadow flex justify-between items-center"
                >
                  <span>{achievement}</span>
                  <button
                    onClick={() => handleDeleteAchievement(achievement)}
                    className="text-red-500 hover:text-red-600 active:scale-95 transition-transform duration-150"
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Achievements;
