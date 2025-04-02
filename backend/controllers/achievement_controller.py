from config.db import db

def get_player_achievement(username):
    player = db.players.find_one({"name": username})
    return player["achievements"]