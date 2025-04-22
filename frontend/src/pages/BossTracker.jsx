import { useState } from "react";
import { fetchBossLog, addBossKill } from './BossTracker.js';
import './BossTracker.css';

function BossTracker() {
  const [username, setUsername] = useState("");
  const [searchName, setSearchName] = useState("");
  const [bossList, setBossList] = useState([]);
  const [newBoss, setNewBoss] = useState("");

  const handleSearch = async () => {
    if (!searchName.trim()) return;
    setUsername(searchName.trim());
    const data = await fetchBossLog(searchName.trim());
    setBossList(data.bosses_killed || []);
  };

  const handleAddBoss = async () => {
    if (!newBoss.trim() || !username) return;
    await addBossKill(username, newBoss.trim());
    const data = await fetchBossLog(username);
    setBossList(data.bosses_killed || []);
    setNewBoss("");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Boss Tracker</h2>
      </div>

      <div className="section">
        <input
          className="input"
          type="text"
          placeholder="Search username"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button className="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {username && (
        <>
          <div className="section">
            <input
              className="input"
              type="text"
              placeholder="Add boss kill"
              value={newBoss}
              onChange={(e) => setNewBoss(e.target.value)}
            />
            <button className="button" onClick={handleAddBoss}>
              Add Boss
            </button>
          </div>

          <ul className="list">
            {bossList.map((boss, index) => (
              <li key={index} className="listItem">
                {boss}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BossTracker;
