import { useState, useEffect } from "react";
import "./LiveTracker.css";
import { fetchItems, createItem } from "../services/LiveTracker";

function LiveTracker() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  useEffect(() => {
    loadItems();
    const interval = setInterval(loadItems, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadItems = async () => {
    try {
      const data = await fetchItems();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const addItem = async () => {
    if (!newItemName.trim() || !newItemPrice.trim()) return;

    try {
      await createItem(newItemName, newItemPrice);
      setNewItemName("");
      setNewItemPrice("");
      loadItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Live Item Sale Tracker</h2>
      </div>

      <div className="form">
        <input
          className="input"
          type="text"
          placeholder="Item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Price sold"
          value={newItemPrice}
          onChange={(e) => setNewItemPrice(e.target.value)}
        />
        <button className="button" onClick={addItem}>
          Add Sale
        </button>
      </div>

      {items.map((item, index) => (
        <div key={index} className="itemBox">
          <p>
            <strong>{item.item_name}</strong> — {item.price_sold.toLocaleString()} gp
          </p>
          <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
            {new Date(item.sold_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LiveTracker;
