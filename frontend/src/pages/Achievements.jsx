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
        // Här anropar vi Flask backend
        const response = await axios.get('http://127.0.0.1:5000/achievements/Alice');
        setAchievements(response.data.achievements);
      } catch (err) {
        setError("Något gick fel. Försök igen senare.");
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
    <div>
      <h2>Alice's Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
);
};

export default Achievements;