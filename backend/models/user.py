from database import mongo

class User:
    @staticmethod
    def create_user(username, password):
        user = {"username": username, "password": password}
        mongo.db.users.insert_one(user)
        return user