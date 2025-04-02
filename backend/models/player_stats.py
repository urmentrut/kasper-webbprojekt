from database import mongo

class PlayerStats:
    @staticmethod
    def get_player_stats(username):
        player_stats = mongo.db.players.find_one({"username": username})
        return player_stats