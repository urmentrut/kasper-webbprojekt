import React, { useState, useEffect } from 'react';

const PlayerList = () => {
  const [playerData, setPlayerData] = useState(null);

  // Fetch player data for "Burak" when the component mounts
  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        // Make the GET request to the backend with "Burak" as the username
        const response = await fetch('http://127.0.0.1:5000/player/Burak'); // Fetch data for Burak
        const data = await response.json();

        // Update the state with the fetched data
        setPlayerData(data);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayer(); // Call the function when the component mounts
  }, []); // Empty dependency array means this will only run once when the component mounts

  // Render player data if available, otherwise show loading message
  return (
    <div>
      <h1>Player Info</h1>
      {playerData ? (
        <div>
          <h2>{playerData.name}</h2> {/* Show the player's name */}
          <p><strong>Highscore:</strong> {playerData.highscore}</p> {/* Show the highscore */}
          <p><strong>Quests Completed:</strong> {playerData.quests_completed}</p> {/* Show quests completed */}
          <p><strong>Achievements:</strong></p>
          <ul>
            {playerData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li> // List all achievements
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading player data...</p> // Loading message if data is not fetched yet
      )}
    </div>
  );
};

export default PlayerList;
