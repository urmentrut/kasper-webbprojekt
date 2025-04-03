// src/api/playerApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/player'; // Adjust the URL if needed

// Get player data by username
export const getPlayer = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching player data:', error);
    return null;
  }
};

// Add a new player
export const createPlayer = async (playerData) => {
  try {
    const response = await axios.post(API_URL, playerData);
    return response.data;
  } catch (error) {
    console.error('Error adding player:', error);
    return null;
  }
};

// Update player data
export const updatePlayer = async (username, playerData) => {
  try {
    const response = await axios.put(`${API_URL}/${username}`, playerData);
    return response.data;
  } catch (error) {
    console.error('Error updating player:', error);
    return null;
  }
};

// Delete a player
export const deletePlayer = async (username) => {
  try {
    const response = await axios.delete(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting player:', error);
    return null;
  }
};
