const API_URL = "http://localhost:5000/livetracker/";

export const fetchItems = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const addItem = async (name, price) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      item_name: name.trim(),
      price_sold: parseInt(price),
    }),
  });
  return await res.json();
};
