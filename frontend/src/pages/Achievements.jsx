/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        // ✅ Rätt endpoint!
        const response = await axios.get('http://127.0.0.1:5000/achievements/players/Alice/achievements');
        setAchievements(response.data); // ✅ data är redan en lista
      } catch (err) {
        console.error("Fel vid hämtning:", err); // För utvecklare
        setError("Något gick fel. Försök igen senare."); // För användare
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return <p>Laddar...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4">Alice's Achievements</h2>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="bg-gray-800 p-3 rounded shadow">{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;