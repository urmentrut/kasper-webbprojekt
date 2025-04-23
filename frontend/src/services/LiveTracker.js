const API_URL = "http://localhost:5000/livetracker/";

export const fetchItems = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch items");
  return await res.json();
};

export const createItem = async (name, price) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      item_name: name.trim(),
      price_sold: parseInt(price),
    }),
  });

  if (!res.ok) throw new Error("Failed to add item");
  return await res.json();
};
