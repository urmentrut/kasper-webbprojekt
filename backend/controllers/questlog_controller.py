from config.db import db

def get_quest(username):
    user_quests = db.questlog.find({"username": username},{"_id":  0})
    user_quests_list = []
    for quest in user_quests:
        user_quests_list.append(quest)
    return user_quests_list

def add_quest_to_user(username, quest_name):
    db.users.update_one({"username": username}, {"$addToSet": {"quests": quest_name}})
    return {"succes": True, "message": f"Quest '{quest_name}' added to user '{username}'."}
    