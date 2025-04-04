from controllers.questlog_controller import get_quest, add_quest_to_user
from flask import Blueprint, jsonify, request

questlog_bp = Blueprint("questlog", __name__)

@questlog_bp.route("/<username>", methods=["GET"])
def get_questlog(username):
    result = get_quest(username)
    return jsonify({"quests": result})

@questlog_bp.route("/<username>/add-quest", methods=["POST"])
def add_quest(username):
    quest_data = request.get_json()  
    result = add_quest_to_user(username, quest_data)
    return jsonify(result)

@questlog_bp.route("/<username>/delete-quest/<quest_name>", methods=["DELETE"])
def delete_quest(username, quest_name):
    # Logik för att ta bort quest
    return jsonify({"success": True, "message": f"Quest '{quest_name}' deleted for user '{username}'."})