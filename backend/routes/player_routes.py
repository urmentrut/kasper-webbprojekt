from flask import Blueprint, jsonify, request
from config.db import player_collection  

player_bp = Blueprint("player", __name__)

# Fetch Player by Username
@player_bp.route("/<username>", methods=["GET"])
def fetch_player(username):
    # Query MongoDB to find the player by username
    player_data = player_collection.find_one({"name": username})
    
    if player_data:
        # Remove the _id from the response (optional)
        player_data.pop("_id", None)
        return jsonify(player_data), 200
    
    return jsonify({"error": "Player not found"}), 404

# Create a New Player
@player_bp.route("/", methods=["POST"])
def create_player():
    data = request.get_json()
    print("Data comes in", data)
    
    if not data or "name" not in data:
        return jsonify({"error": "Invalid data"}), 400
    
    # Insert new player data into MongoDB
    new_player = {
        "name": data["name"],
        "achievements": data.get("achievements", []),
        "quests_completed": data.get("quests_completed", 0),
        "highscore": data.get("highscore", 0)
    }
    
    # Insert the player document into MongoDB
    result = player_collection.insert_one(new_player)
    
    # Optionally, return the player data with the inserted _id
    new_player["_id"] = str(result.inserted_id)
    
    return jsonify(new_player), 201

# Update Player's Data
@player_bp.route("/<username>", methods=["PUT"])
def modify_player(username):
    data = request.get_json()
    
    if not data:
        return jsonify({"error": "Invalid data"}), 400
    
    # Update the player document in MongoDB
    updated_player = {
        "name": username,
        "achievements": data.get("achievements", []),
        "quests_completed": data.get("quests_completed", 0),
        "highscore": data.get("highscore", 0)
    }
    
    result = player_collection.update_one({"name": username}, {"$set": updated_player})
    
    if result.matched_count > 0:
        return jsonify(updated_player), 200
    
    return jsonify({"error": "Player not found"}), 404

# Delete Player by Username
@player_bp.route("/<username>", methods=["DELETE"])
def remove_player(username):
    # Delete player from MongoDB by username
    result = player_collection.delete_one({"name": username})
    
    if result.deleted_count > 0:
        return jsonify({"message": f"Player {username} deleted successfully."}), 200
    
    return jsonify({"error": "Player not found"}), 404
