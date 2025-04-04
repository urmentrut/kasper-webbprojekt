import axios from "axios";

const API_BASE_URL = "http://localhost:5000/questlog";

// Lägg till en ny quest
export const addQuest = async (username, questData) => {
    const response = await axios.post(`${API_BASE_URL}/${username}/add-quest`, questData);
    return response.data;
};

// Ta bort en quest
export const deleteQuest = async (username, questName) => {
    const response = await axios.delete(`${API_BASE_URL}/${username}/delete-quest/${questName}`);
    return response.data;
};