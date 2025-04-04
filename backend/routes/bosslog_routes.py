from flask import Blueprint, jsonify, request
from controllers.bosslog_controller import add_boss_kill, get_boss_kills

bosslog_bp = Blueprint("bosslog", __name__)

# Route to add a boss kill
@bosslog_bp.route("/", methods=["POST"])
def log_boss_kill():
    data = request.get_json()
    
    if not data or "username" not in data or "boss_name" not in data:
        return jsonify({"error": "Invalid data"}), 400

    result = add_boss_kill(data["username"], data["boss_name"])
    return jsonify(result), 201

# Route to get all bosses killed by a user
@bosslog_bp.route("/<username>", methods=["GET"])
def fetch_boss_kills(username):
    boss_kills = get_boss_kills(username)
    return jsonify(boss_kills), 200
