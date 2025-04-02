import { useState } from "react";

const bosses = [
  "Zulrah", "Vorkath", "Kraken", "Cerberus", "Kree'arra", 
  "General Graardor", "Zamorak", "Saradomin", "The Nightmare"
];

export default function BossTracker() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  const fetchMockData = () => {
    const mockData = bosses.map(boss => ({
      name: boss,
      kills: Math.floor(Math.random() * 500) // Random kills between 0-500
    }));
    setData(mockData);
  };

  return (
    <div className="min-h-screen bg-[#272727] text-gold flex flex-col items-center p-6">
      {/* BossTracker Box with the same light brown color from your CSS */}
      <div className="home-header mb-6">
        BossTracker
      </div>

      <div className="mb-4">
        <input
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-gold text-black p-2 rounded-md mt-2 ml-2"
          onClick={fetchMockData}
        >
          Fetch Data
        </button>
      </div>

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
          {data.map((boss) => (
            <div key={boss.name} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
              {/* Boss name in gold */}
              <h2 className="text-xl font-semibold text-gold">{boss.name}</h2>
              <p className="text-lg">Kills: {boss.kills}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
