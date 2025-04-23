import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/achievements';

// Hämta achievements
export const getAchievements = async (username) => {
    const response = await axios.get(`${BASE_URL}/players/${username}/achievements`);
    return response.data;
};

// Lägg till achievement
export const addAchievement = async (username, achievement) => {
    await axios.post(`${BASE_URL}/players/${username}/achievements`, {
        achievement,
    });
};
 // Ta bort achievement
export const deleteAchievement = async (username, achievement) => {
    await axios.delete(`${BASE_URL}/players/${username}/achievements`, {
        data: { achievement },
    });
};