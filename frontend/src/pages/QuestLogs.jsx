import { useState } from "react";
import { addQuest, deleteQuest } from "../services/questlogApi";

export default function QuestLog() {
    const [username, setUsername] = useState("");
    const [quests, setQuests] = useState([]);
    const [newQuest, setNewQuest] = useState({ name: "", status: "" });

    
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

    
    const generateRandomQuests = (quests) => {
        return quests.map((quest) => ({
            ...quest,
            status: Math.random() > 0.5 ? "Completed" : "Not Completed",
        }));
    };

    
    const handleUsernameSearch = () => {
        if (username.trim()) {
            const randomQuests = generateRandomQuests(mockQuestData);
            setQuests(randomQuests);
        } else {
            setQuests([]);
        }
    };

    
    const handleAddQuest = async () => {
        console.log("Add Quest button clicked");
        if (newQuest.name && newQuest.status) {
            try {
                const result = await addQuest(username, newQuest);
                console.log("Add Quest API response:", result); 
                if (result.succes) {
                    setQuests([...quests, newQuest]);
                    setNewQuest({ name: "", status: "" });
                    alert("Quest added successfully!"); // Visar en popup
                } else {
                    console.error("Failed to add quest:", result.message);
                }
            } catch (error) {
                console.error("Error adding quest:", error);
            }
        } else {
            console.error("Quest name and status are required.");
        }
    };

    // Ta bort en quest
    const handleDeleteQuest = async (questName) => {
        try {
            const result = await deleteQuest(username, questName);
            if (result.success) {
                setQuests(quests.filter((q) => q.name !== questName));
            } else {
                console.error("Failed to delete quest:", result.message);
            }
        } catch (error) {
            console.error("Error deleting quest:", error);
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

            {/* Add New Quest */}
            <div className="mt-6">
                <h2 className="text-white text-xl mb-4">Add New Quest</h2>
                <input
                    type="text"
                    placeholder="Quest Name"
                    value={newQuest.name}
                    onChange={(e) => setNewQuest({ ...newQuest, name: e.target.value })}
                    className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md mr-2"
                />
                <select
                    value={newQuest.status}
                    onChange={(e) => setNewQuest({ ...newQuest, status: e.target.value })}
                    className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md mr-2"
                >
                    <option value="">Select Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
                <button
                    onClick={handleAddQuest}
                    className="bg-gold text-black p-2 rounded-md"
                >
                    Add Quest
                </button>
            </div>

            {/* Display Quests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mt-6">
                {quests.map((quest, index) => (
                    <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gold">{quest.name}</h2>
                        <p className="text-lg">{`Status: ${quest.status}`}</p>
                        <button
                            onClick={() => handleDeleteQuest(quest.name)}
                            className="bg-red-500 text-white p-2 rounded-md ml-2"
                        >
                            Delete
                        </button>
                    </div>
                ))}
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