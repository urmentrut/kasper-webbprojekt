import { useState } from "react";

export default function QuestLog() {
  const [username, setUsername] = useState(""); // For the username input
const [quests, setQuests] = useState([]);

  // Mock quest data (quests without completion status initially)
const mockQuestData = [
    { name: "Cook's Assistant" },
    { name: "Restless Ghost" },
    { name: "The Knight's Sword" },
    { name: "Dragon Slayer" },
    { name: "Fight Arena" },
    { name: "Shilo Village" },
    { name: "Monkey Madness" },
    { name: "Desert Treasure" },
    { name: "Recipe for Disaster" },
];

  // Function to generate random completion status for quests
const generateRandomQuests = (quests) => {
    return quests.map((quest) => ({
    ...quest,
      status: Math.random() > 0.5 ? "Completed" : "Not Completed", // Randomly assign status
    }));
};

  // Function to handle search and display mock quest data
const handleUsernameSearch = () => {
    if (username.trim()) {
    const randomQuests = generateRandomQuests(mockQuestData);
      setQuests(randomQuests); // Display the randomly generated quest statuses
    } else {
      setQuests([]); // If no username is entered, clear the quests
    }
};

return (
    <div className="min-h-screen bg-[#272727] text-gold flex flex-col items-center p-6">
      {/* Header */}
    <div className="home-header mb-6">Quest Log</div>

      {/* Username input */}
    <div className="mb-4">
        <input
        className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <button
        className="bg-gold text-black p-2 rounded-md ml-2"
        onClick={handleUsernameSearch}
        >
        Search Quest Log
        </button>
    </div>

      {/* Display quests when username is entered */}
    {username && quests.length > 0 ? (
        <>
        <div className="text-white text-xl mb-4">Quest Log for {username}:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mt-6">
            {quests.map((quest, index) => (
            <div
                key={index}
                className="bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            >
                <h2 className="text-xl font-semibold text-gold">{quest.name}</h2>
                <p className="text-lg">{`Status: ${quest.status}`}</p>
            </div>
            ))}
        </div>
        </>
    ) : username && quests.length === 0 ? (
        <p className="text-white mt-4">No quests found for {username}.</p>
    ) : (
        <p className="text-white mt-4">Please enter a username to view quests.</p>
    )}
    </div>
);
}
