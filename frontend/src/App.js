import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import PlayerStats from "./components/PlayerStats";
import QuestLog from "./components/QuestLog";
import GEPriceTracker from "./components/GEPriceTracker";
import Achievements from "./components/Achievements";
import Bosslog from "./components/Bosslog";

export default function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (username) {
      setAuthenticated(true);
    }
  }, [username]);

  return (
    <div>
      <h1>OSRS Tracker</h1>
      {!authenticated ? (
        <LoginForm setAuthenticated={setAuthenticated} setUsername={setUsername} />
      ) : (
        <>
          <PlayerStats username={username} />
          <QuestLog username={username} />
          <GEPriceTracker />
          <Achievements username={username} />
          <Bosslog username={username} />
        </>
      )}
    </div>
  );
}
