
from flask import Blueprint, jsonify, request
from controllers.player_controller import get_player, add_player, update_player, delete_player

player_bp = Blueprint("player", __name__)

#Player's data
@player_bp.route("/<username>", methods=["GET"])
def fetch_player(username):
    player_data = get_player(username)
    if player_data:
        return jsonify(player_data), 200
    return jsonify({"error": "Player not found"}), 404

#Skapa a new player
@player_bp.route("/", methods=["POST"])
def create_player():
    data = request.get_json()
    print("Data kommer fram", data)
    if not data or "name" not in data:
        return jsonify({"error": "Invalid data"}), 400

    result = add_player(data)
    return jsonify(result), 201

#Uppdatera
@player_bp.route("/<username>", methods=["PUT"])
def modify_player(username):
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid data"}), 400

    result = update_player(username, data)
    return jsonify(result), 200

#Ta bort
@player_bp.route("/<username>", methods=["DELETE"])
def remove_player(username):
    result = delete_player(username)
    return jsonify(result), 200
