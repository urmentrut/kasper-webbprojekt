from config.db import db
from flask import jsonify

# READ: Hämta en spelares achievements
def get_player_achievements(username):
    player = db.players.find_one({"username": username})
    if player:
        return jsonify(player.get("achievements", [])), 200
    else:
        return jsonify({"msg": "Player not found."}), 404

# CREATE: Lägg till en achievement
def add_achievement(username, achievement):
    result = db.players.update_one(
        {"username": username},
        {"$addToSet": {"achievements": achievement}}
    )
    if result.modified_count:
        return jsonify({"msg": "Achievement added."}), 201
    else:
        return jsonify({"msg": "Player not found or achievement already exists."}), 404

# UPDATE: Uppdatera achievement
def update_achievement(username, old_achievement, new_achievement):
    result = db.players.update_one(
        {"username": username, "achievements": old_achievement},
        {"$set": {"achievements.$": new_achievement}}
    )
    if result.modified_count:
        return jsonify({"msg": "Achievement updated."}), 200
    else:
        return jsonify({"msg": "Player or achievement not found."}), 404

# DELETE: Ta bort achievement
def delete_achievement(username, achievement):
    result = db.players.update_one(
        {"username": username},
        {"$pull": {"achievements": achievement}}
    )
    if result.modified_count:
        return jsonify({"msg": "Achievement deleted."}), 200
    else:
        return jsonify({"msg": "Player or achievement not found."}), 404