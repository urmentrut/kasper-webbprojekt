from flask import Blueprint, jsonify, request
from backend.models.questlog import Quest, add_quest, get_all_quests, get_quest_by_id, update_quest, delete_quest

questlog_bp = Blueprint("questlog", __name__)

# Hämta alla quests
@questlog_bp.route("/", methods=["GET"])
def get_all_quests_route():
    quests = get_all_quests()
    return jsonify([quest.__dict__ for quest in quests])

# Hämta en specifik quest
@questlog_bp.route("/<int:id>", methods=["GET"])
def get_quest_route(id):
    quest = get_quest_by_id(id)
    if quest:
        return jsonify(quest.__dict__)
    return jsonify({"error": "Quest not found"}), 404

# Skapa en ny quest
@questlog_bp.route("/", methods=["POST"])
def create_quest():
    data = request.get_json()
    new_quest = Quest(id=data["id"], title=data["title"], description=data["description"], status=data["status"])
    add_quest(new_quest)
    return jsonify(new_quest.__dict__), 201

# Uppdatera en quest
@questlog_bp.route("/<int:id>", methods=["PUT"])
def update_quest_route(id):
    data = request.get_json()
    updated_quest = update_quest(id, data["title"], data["description"], data["status"])
    if updated_quest:
        return jsonify(updated_quest.__dict__)
    return jsonify({"error": "Quest not found"}), 404

# Ta bort en quest
@questlog_bp.route("/<int:id>", methods=["DELETE"])
def delete_quest_route(id):
    remaining_quests = delete_quest(id)
    return jsonify([quest.__dict__ for quest in remaining_quests])
