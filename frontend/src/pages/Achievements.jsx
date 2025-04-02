import { useState } from "react";

const achievements = [
"First Kill", "Master Slayer", "Ultimate Victory", "Champion", "Expert Hunter",
"God of War", "Top Scorer", "Treasure Seeker", "PvP Champion", "Monster Hunter"
];

export default function Achievements() {
const [username, setUsername] = useState("");
const [achievementData, setAchievementData] = useState(null);

const fetchMockAchievementData = () => {
    const mockAchievementData = achievements.map(achievement => ({
    name: achievement,
      unlocked: Math.random() > 0.5 // Randomly unlocked or not
    }));
    setAchievementData(mockAchievementData);
};

return (
    <div className="min-h-screen bg-[#272727] text-gold flex flex-col items-center p-6">
      {/* Achievements Header */}
    <div className="home-header mb-6">
        Achievements
    </div>

      {/* Username input and button */}
    <div className="mb-4">
        <input
        className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <button
        className="bg-gold text-black p-2 rounded-md mt-2 ml-2"
        onClick={fetchMockAchievementData}
        >
        Fetch Achievements
        </button>
    </div>

      {/* Display Achievement Data */}
    {achievementData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mt-6">
        {achievementData.map((achievement) => (
            <div key={achievement.name} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gold">{achievement.name}</h2>
            <p className="text-lg">{achievement.unlocked ? "Unlocked" : "Locked"}</p>
            </div>
        ))}
        </div>
    )}
    </div>
);
}
