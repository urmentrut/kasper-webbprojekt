from flask import Blueprint, jsonify, request
from controllers.livetracker_controller import get_all_items, add_item

livetracker_bp = Blueprint("livetracker", __name__)

@livetracker_bp.route("/", methods=["GET"])
def fetch_items():
    items = get_all_items()
    return jsonify(items), 200

@livetracker_bp.route("/", methods=["POST"])
def add_new_item():
    data = request.get_json()
    if not data or "item_name" not in data or "price_sold" not in data:
        return jsonify({"error": "Missing fields"}), 400
    result = add_item(data)
    return jsonify(result), 201