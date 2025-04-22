const API_URL = 'http://localhost:5000/bosslog';

export const fetchBossLog = async (usernameToSearch) => {
const res = await fetch(`${API_URL}/${usernameToSearch}`);
const data = await res.json();
return data;
};

export const addBossKill = async (username, bossName) => {
const res = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, boss_name: bossName }),
});
return await res.json();
};
