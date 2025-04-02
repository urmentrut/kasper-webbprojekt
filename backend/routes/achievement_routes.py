# backend/routes/achievement_routes.py
from flask import Blueprint, jsonify
from controllers.achievement_controller import get_player_achievement

achievement_bp = Blueprint("c", __name__)

@achievement_bp.route("/<username>", methods=["GET"])
def get_achievements(username):
    # Här kan du anropa databas eller API för achievements
    achievements = get_player_achievement(username)
   # print(achievements)
    #return jsonify({"username": username, "achievements": ["achievements"]})
    return {"achievements": achievements}
