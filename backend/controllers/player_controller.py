from config.db import db

#Hämta a player's data
def get_player(username):
    player = db.players.find_one({"name": username})
    if player:
        return {
            "name": player["name"],
            "achievements": player.get("achievements", []),
            "quests_completed": player.get("quests_completed", 0),
            "highscore": player.get("highscore", 0)
        }
    return None

# Lägg till new player
def add_player(data):
    if db.players.find_one({"name": data["name"]}):
        return {"error": "Player already exists"}

    db.players.insert_one({
        "name": data["name"],
        "achievements": data.get("achievements", []),
        "quests_completed": data.get("quests_completed", 0),
        "highscore": data.get("highscore", 0)
    })
    return {"message": "Player added successfully"}

# Uppdatera  player's data
def update_player(username, data):
    result = db.players.update_one({"name": username}, {"$set": data})
    if result.modified_count:
        return {"message": "Player updated successfully"}
    return {"error": "No changes made"}

# Delete en player
def delete_player(username):
    result = db.players.delete_one({"name": username})
    if result.deleted_count:
        return {"message": "Player deleted successfully"}
    return {"error": "Player not found"}
