# backend/routes/bosslog_routes.py
from flask import Blueprint, jsonify

bosslog_bp = Blueprint("bosslog", __name__)

@bosslog_bp.route("/<username>", methods=["GET"])
def get_bosslog(username):
    # Här kan du anropa API eller databas för bosslog
    return jsonify({"username": username, "bosses_defeated": 10})
