# backend/routes/ge_price_tracker_routes.py
from flask import Blueprint, jsonify

ge_price_tracker_bp = Blueprint("ge_price_tracker", __name__)

@ge_price_tracker_bp.route("/<item_name>", methods=["GET"])
def get_ge_price(item_name):
    # Här kan du anropa API eller databas för Grand Exchange priser
    return jsonify({"item_name": item_name, "price": 100000})
