# backend/controllers/user_controller.py
from models.User import User
from flask import jsonify

def create_user(username, password):
    # Kontrollera om användaren redan finns
    existing_user = User.find_by_username(username)
    if existing_user:
        return jsonify({'error': 'Username already exists'}), 400  # Återvänd med en korrekt statuskod

    # Skapa en ny användare
    user = User(username, password)
    user.save_to_db()

    # Skicka tillbaka ett meddelande när användaren är skapad
    return jsonify({'message': 'User created successfully', 'user': {'username': user.username}}), 201
