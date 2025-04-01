from backend.config.db import db

class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

    def save_to_db(self):
        user_data = {
            "username": self.username,
            "password": self.password
        }
        return db.users.insert_one(user_data)


    def find_by_username(username):
        return db.users.find_one({"username": username})