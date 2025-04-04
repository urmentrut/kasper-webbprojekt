import { useState, useEffect } from "react";

function BossTracker() {
  const [username, setUsername] = useState("");
  const [searchName, setSearchName] = useState("");
  const [bossList, setBossList] = useState([]);
  const [newBoss, setNewBoss] = useState("");

  // GET request to fetch boss log
  const fetchBossLog = async (usernameToSearch) => {
    const res = await fetch(`http://localhost:5000/bosslog/${usernameToSearch}`);
    const data = await res.json();

    if (data.bosses_killed) {
      setBossList(data.bosses_killed);
    } else {
      setBossList([]);
    }
  };

  // POST request to add boss kill
  const addBossKill = async (username, bossName) => {
    const res = await fetch(`http://localhost:5000/bosslog/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, boss_name: bossName }),
    });
    return await res.json();
  };

  const handleSearch = async () => {
    if (!searchName.trim()) return;
    setUsername(searchName.trim());
    await fetchBossLog(searchName.trim());
  };

  const handleAddBoss = async () => {
    if (!newBoss.trim() || !username) return;
    await addBossKill(username, newBoss.trim());
    await fetchBossLog(username);
    setNewBoss("");
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#3B2A24", // Dark brown background
      minHeight: "100vh",
      color: "white",
    },
    header: {
      backgroundColor: "#6E4B34", // Light brown
      color: "white",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "20px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    },
    input: {
      padding: "10px",
      border: "1px solid #444",
      borderRadius: "6px",
      width: "200px",
      marginRight: "10px",
      backgroundColor: "#6E4B34",
      color: "white",
    },
    button: {
      backgroundColor: "gold",
      border: "none",
      padding: "10px 16px",
      borderRadius: "6px",
      color: "#333",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      marginTop: "20px",
    },
    listItem: {
      margin: "10px auto",
      padding: "10px 0",
      width: "60%",
      fontWeight: "600",
      color: "white",
      backgroundColor: "transparent",
    },
    section: {
      marginBottom: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Boss Tracker</h2>
      </div>

      <div style={styles.section}>
        <input
          style={styles.input}
          type="text"
          placeholder="Search username"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button style={styles.button} onClick={handleSearch}>
          Search
        </button>
      </div>

      {username && (
        <>
          <div style={styles.section}>
            <input
              style={styles.input}
              type="text"
              placeholder="Add boss kill"
              value={newBoss}
              onChange={(e) => setNewBoss(e.target.value)}
            />
            <button style={styles.button} onClick={handleAddBoss}>
              Add Boss
            </button>
          </div>

          <ul style={styles.list}>
            {bossList.map((boss, index) => (
              <li key={index} style={styles.listItem}>
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
