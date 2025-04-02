from config.db import db  

class PlayerStats:
    @staticmethod
    def get_player_stats(username):
        # Hämta spelarstatistik från "player_stats" collection
        player_stats = db.player_stats.find_one({"username": username})
        return player_stats
