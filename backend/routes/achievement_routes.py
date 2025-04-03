from flask import Blueprint, request
from controllers.achievement_controller import (
    add_achievement,
    get_player_achievements,
    update_achievement,
    delete_achievement
)

achievement_bp = Blueprint('achievement', __name__)

@achievement_bp.route('/players/<username>/achievements', methods=['GET'])
def achievements(username):
    return get_player_achievements(username)

@achievement_bp.route('/players/<username>/achievements', methods=['POST'])
def add_new_achievement(username):
    achievement = request.json.get('achievement')
    return add_achievement(username, achievement)

@achievement_bp.route('/players/<username>/achievements', methods=['PUT'])
def update_existing_achievement(username):
    old_achievement = request.json.get('old_achievement')
    new_achievement = request.json.get('new_achievement')
    return update_achievement(username, old_achievement, new_achievement)

@achievement_bp.route('/players/<username>/achievements', methods=['DELETE'])
def remove_achievement(username):
    achievement = request.json.get('achievement')
    return delete_achievement(username, achievement)