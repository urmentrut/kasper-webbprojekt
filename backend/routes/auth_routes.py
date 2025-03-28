from flask import Blueprint, jsonify

auth_routes = Blueprint('auth_routes', __name__)

@auth_routes.route('/login', methods=['POST'])
def login():
    # INLOGGNING
    return jsonify({"message": "Login successful"})

@auth_routes.route('/signup', methods=['POST'])
def signup():
    # SIGNUP
    return jsonify({"message": "Signup successful"})
