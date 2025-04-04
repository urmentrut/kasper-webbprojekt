from config.db import db

# Function to add a boss kill for a player
def add_boss_kill(username, boss_name):
    player = db.bosslog.find_one({"username": username})
    
    if player:
        db.bosslog.update_one(
            {"username": username},
            {"$push": {"bosses_killed": boss_name}}
        )
    else:
        db.bosslog.insert_one({"username": username, "bosses_killed": [boss_name]})

    return {"message": f"Boss {boss_name} added for {username}"}

# Function to get all boss kills for a player
def get_boss_kills(username):
    player = db.bosslog.find_one({"username": username})
    
    if player:
        return {"username": username, "bosses_killed": player.get("bosses_killed", [])}
    
    return {"error": "Player not found"}
