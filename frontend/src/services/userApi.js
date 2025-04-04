import axios from 'axios';

export const get_user_quests = async () => {
    try {
        const response = await axios.get('https://api.example.com/quests'); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching quests:', error);
        throw error;
    }
};