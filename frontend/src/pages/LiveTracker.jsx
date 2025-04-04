import { useState, useEffect } from "react";

function LiveTracker() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  // Fetch all items
  const fetchItems = async () => {
    try {
      const res = await fetch("http://localhost:5000/livetracker/");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // Add new item (Create)
  const addItem = async () => {
    if (!newItemName.trim() || !newItemPrice.trim()) return;

    const res = await fetch("http://localhost:5000/livetracker/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_name: newItemName.trim(),
        price_sold: parseInt(newItemPrice),
      }),
    });

    const data = await res.json();
    console.log(data);

    setNewItemName("");
    setNewItemPrice("");
    fetchItems(); // Refresh the list
  };

  useEffect(() => {
    fetchItems();
    const interval = setInterval(fetchItems, 5000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      textAlign: "center",
      backgroundColor: "#3B2A24",
      color: "white",
      padding: "30px",
      minHeight: "100vh",
    },
    header: {
      backgroundColor: "#6E4B34",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    itemBox: {
      margin: "10px auto",
      width: "70%",
      borderBottom: "1px solid #6E4B34",
      paddingBottom: "8px",
    },
    input: {
      padding: "10px",
      margin: "8px",
      borderRadius: "6px",
      border: "1px solid #444",
      backgroundColor: "#6E4B34",
      color: "white",
      width: "200px",
    },
    button: {
      padding: "10px 16px",
      borderRadius: "6px",
      backgroundColor: "gold",
      border: "none",
      fontWeight: "bold",
      color: "#333",
      cursor: "pointer",
      marginLeft: "8px",
    },
    form: {
      marginBottom: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Live Item Sale Tracker</h2>
      </div>

      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Price sold"
          value={newItemPrice}
          onChange={(e) => setNewItemPrice(e.target.value)}
        />
        <button style={styles.button} onClick={addItem}>
          Add Sale
        </button>
      </div>

      {items.map((item, index) => (
        <div key={index} style={styles.itemBox}>
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