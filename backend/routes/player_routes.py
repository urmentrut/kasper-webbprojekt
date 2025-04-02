# backend/routes/player_routes.py
from flask import Blueprint, jsonify

player_bp = Blueprint("player", __name__)

@player_bp.route("/<username>", methods=["GET"])
def get_player(username):
    print("Hej", username)
    # Här kan du anropa din databas eller API för att få spelarens stats
    return jsonify({"username": username, "highscore": 1000, "quests_completed": 50})
