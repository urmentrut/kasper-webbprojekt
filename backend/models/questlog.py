class Quest:
    def __init__(self, id, title, description, status):
        self.id = id
        self.title = title
        self.description = description
        self.status = status

QUESTS = []

def add_quest(quest):
    QUESTS.append(quest)

def get_all_quests():
    return QUESTS
 
def get_quest_by_id(id):
    for quest in QUESTS:
        if quest.id == id:
            return quest
    return None

def update_quest(id, title, description, status):
    quest = get_quest_by_id(id)
    if quest:
        quest.title = title
        quest.description = description
        quest.status = status
        return quest
    return None

def delete_quest(id):
    global QUESTS
    QUESTS = [quest for quest in QUESTS if quest.id != id]
    return QUESTS
