from database import mongo

class Bosslog:
    @staticmethod
    def get_bosslog(username):
        bosslog = mongo.db.bosslogs.find_one({"username": username})
        return bosslog