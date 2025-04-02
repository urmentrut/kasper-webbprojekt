from database import mongo

class Achievements:
    @staticmethod
    def get_achievements(username):
        achievements = mongo.db.achievements.find_one({"username": username})
        return achievements