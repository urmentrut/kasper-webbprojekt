import axios from "axios";

const API_URL = "http://localhost:5000"

export const registerUser = async (username, password) => {
    return axios.post(`${API_URL}/auth/register`, { username, password });
  };
  
  export const loginUser = async (username, password) => {
    return axios.post(`${API_URL}/auth/login`, { username, password });
  };
  
  export const getPlayerStats = async (username) => {
    return axios.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${username}`);
  };
  
  export const getQuestlog = async (username) => {
    return axios.get(`https://apps.runescape.com/runemetrics/quests?user=${username}`);
  };
  
  export const getItemPrice = async (itemName) => {
    return axios.get(`https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?alpha=${itemName[0].toLowerCase()}`);
};
  
  export const getAchievements = async (username) => {
    return axios.get(`${API_URL}/achievements/${username}`);
  };
  
  export const getBosslog = async (username) => {
    return axios.get(`https://apps.runescape.com/runemetrics/bosslog?user=${username}`);
};