# backend/routes/questlog_routes.py
from flask import Blueprint, jsonify

questlog_bp = Blueprint("questlog", __name__)

@questlog_bp.route("/<username>", methods=["GET"])
def get_questlog(username):
    # Här kan du anropa API eller databas för quests
    return jsonify({"username": username, "quests_completed": 10, "quests_incomplete": 5})