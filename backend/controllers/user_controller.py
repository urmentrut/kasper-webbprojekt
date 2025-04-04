from config.db import db

def add_user(user):
    username = user["username"]
    result = db.users.insert_one({"username": username})
    return {"message": "User created!"}



