from flask import Blueprint, jsonify, request
from controllers.user_controller import add_user

user_bp = Blueprint("user", __name__)

@user_bp.route("/add-user", methods=["POST"])
def add_new_user():
    user = request.get_json()
    result = add_user(user)
    return jsonify(result)