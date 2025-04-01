from models.User import User, db
from flask import jsonify

def create_user(username, password):
    existing_user = User.find_by_username(username)
    if existing_user:
        return jsonify({'error': 'Username exist s'}), 400

    user = User(username, password)
    user.save_to_db()

    return jsonify({'message': 'User created'})

