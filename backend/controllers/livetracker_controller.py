from config.db import db
from datetime import datetime

def get_all_items():
    items = db.livetracker.find().sort("sold_at", -1)
    return [
        {
            "item_name": item["item_name"],
            "price_sold": item["price_sold"],
            "sold_at": item.get("sold_at")
        }
        for item in items
    ]

def add_item(data):
    item = {
        "item_name": data["item_name"],
        "price_sold": data["price_sold"],
        "sold_at": data.get("sold_at", datetime.utcnow().isoformat())
    }
    db.livetracker.insert_one(item)
    return {"message": "Item added to live tracker"}