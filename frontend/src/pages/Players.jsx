import React, { useState, useEffect } from "react";
import { getPlayer, createPlayer, updatePlayer, deletePlayer } from "../components/playerApi";

const Players = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [newPlayerData, setNewPlayerData] = useState({
    name: "",
    achievements: [],
    quests_completed: 0,
    highscore: 0,
  });

  useEffect(() => {
    if (playerName) {
      getPlayer(playerName)
        .then((data) => {
          if (data) setPlayerData(data);
        })
        .catch((error) => console.error("Error fetching player:", error));
    }
  }, [playerName]);

  const handleCreatePlayer = async () => {
    try {
      const response = await createPlayer(newPlayerData);
      if (response) setPlayerData(response);
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  const handleUpdatePlayer = async () => {
    try {
      const response = await updatePlayer(playerName, newPlayerData);
      if (response) setPlayerData(response);
    } catch (error) {
      console.error("Error updating player:", error);
    }
  };

  const handleDeletePlayer = async () => {
    try {
      const response = await deletePlayer(playerName);
      if (response) setPlayerData(null);
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <div>
      <h1>Player CRUD</h1>
      <div>
        <input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button onClick={() => getPlayer(playerName)}>Get Player</button>
      </div>
      <div>
        {playerData && (
          <div>
            <h2>{playerData.name}</h2>
            <p>Achievements: {playerData.achievements.join(", ")}</p>
            <p>Quests Completed: {playerData.quests_completed}</p>
            <p>Highscore: {playerData.highscore}</p>
          </div>
        )}
      </div>

      <div>
        <h3>Create / Update Player</h3>
        <input
          type="text"
          placeholder="Name"
          value={newPlayerData.name}
          onChange={(e) => setNewPlayerData({ ...newPlayerData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Highscore"
          value={newPlayerData.highscore}
          onChange={(e) =>
            setNewPlayerData({ ...newPlayerData, highscore: Number(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Quests Completed"
          value={newPlayerData.quests_completed}
          onChange={(e) =>
            setNewPlayerData({ ...newPlayerData, quests_completed: Number(e.target.value) })
          }
        />
        <button onClick={handleCreatePlayer}>Create Player</button>
        <button onClick={handleUpdatePlayer}>Update Player</button>
      </div>

      <button onClick={handleDeletePlayer}>Delete Player</button>
    </div>
  );
};

export default Players;
