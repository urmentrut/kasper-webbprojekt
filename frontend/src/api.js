// api.js
/* eslint-disable */

// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/player'; // Adjust the URL if needed

// Fetch player data by username
export const fetchPlayer = async (username) => { // Renamed from getPlayer to fetchPlayer
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Player not found");
  }
};

// Create a new player
export const createPlayer = async (playerData) => {
  try {
    const response = await axios.post(API_URL, playerData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create player");
  }
};

// Update player data
export const updatePlayer = async (username, playerData) => {
  try {
    const response = await axios.put(`${API_URL}/${username}`, playerData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update player");
  }
};

// Delete player data
export const deletePlayer = async (username) => {
  try {
    const response = await axios.delete(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete player");
  }
};

export const getAchievements = async (username) => {
  return axios.get(`${API_URL}/achievements/players/${username}/achievements`);
};

export const getBosslog = async (username) => {
  return axios.get(`https://apps.runescape.com/runemetrics/bosslog?user=${username}`);
};