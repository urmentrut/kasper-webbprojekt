from flask import Blueprint, request, jsonify
from models.user import User

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    User.create_user(data["username"], data["password"])
    return jsonify({"message": "User registered successfully"}), 201