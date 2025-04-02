# backend/routes/achievement_routes.py
from flask import Blueprint, jsonify

achievement_bp = Blueprint("achievement", __name__)

@achievement_bp.route("/<username>", methods=["GET"])
def get_achievements(username):
    # Här kan du anropa databas eller API för achievements
    return jsonify({"username": username, "achievements": ["Achievement 1", "Achievement 2"]})
