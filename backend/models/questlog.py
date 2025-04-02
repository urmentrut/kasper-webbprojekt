from database import mongo

class Questlog:
    @staticmethod
    def get_quests(username):
        quests = mongo.db.questlogs.find_one({"username": username})
        return quests