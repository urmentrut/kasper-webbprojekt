import { useState, useEffect } from "react";

// Mock data for sold items
const items = [
  { name: "Abyssal Whip", price: Math.floor(Math.random() * 5000000) + 1000000 },
  { name: "Dragon Claws", price: Math.floor(Math.random() * 3000000) + 2000000 },
  { name: "ZGS", price: Math.floor(Math.random() * 1000000) + 500000 },
  { name: "Bandos Chestplate", price: Math.floor(Math.random() * 2000000) + 1500000 },
  { name: "Saradomin Sword", price: Math.floor(Math.random() * 2000000) + 500000 },
  { name: "Tome of Fire", price: Math.floor(Math.random() * 1500000) + 500000 }
];

export default function LiveTracker() {
const [soldItems, setSoldItems] = useState([]);

  // Function to simulate new items being sold
const fetchSoldItems = () => {
    const newItem = items[Math.floor(Math.random() * items.length)];
    setSoldItems((prevItems) => [newItem, ...prevItems].slice(0, 10)); // Keep the last 10 items
};

  // Fetch new sold items every 3 seconds (for simulation)
useEffect(() => {
    const intervalId = setInterval(fetchSoldItems, 3000); // Update every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
}, []);

return (
    <div className="min-h-screen bg-[#272727] text-gold flex flex-col items-center p-6">
      {/* LiveTracker Header */}
    <div className="home-header mb-6">
        LiveTracker
    </div>

      {/* Display sold items */}
    {soldItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mt-6">
        {soldItems.map((item, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gold">{item.name}</h2>
            <p className="text-lg">{`Price: ${item.price.toLocaleString()} GP`}</p>
            </div>
        ))}
        </div>
    ) : (
        <p className="text-white mt-4">No sold items yet...</p>
    )}
    </div>
);
}
