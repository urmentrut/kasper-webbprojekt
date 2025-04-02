from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from controllers.user_controller import create_user

# Connect to MongoDB
connection_string = "mongodb://localhost:27017"
client = MongoClient(connection_string)
db_name = "kasper"
db = client[db_name]

user_routes = Blueprint("user_routes", __name__)

# Route to save stats from React frontend
@user_routes.route("/save-stats", methods=["POST"])
def save_stats():
    data = request.json  # Get data from frontend request

    if not data or "username" not in data:
        return jsonify({"error": "Invalid data"}), 400

    # Save to MongoDB
    db.characterstats.insert_one(data)

    return jsonify({"message": "Stats saved successfully"}), 201

# Route to get all saved stats
@user_routes.route("/get-stats", methods=["GET"])
def get_stats():
    stats = list(db.characterstats.find({}, {"_id": 0}))  # Exclude MongoDB _id
    return jsonify(stats)

@user_routes.route("/create-user", methods=["POST"])
def post_user():
    print("test")
    data = request.get_json()

    if not data or 'username' not in data or 'password' not in data:
     return jsonify({'error': 'Missing username or password'}), 400 

    new_user, error = create_user(data['username'], data['password'])
  
    if error:
      return jsonify({'error': error}), 400  
    return jsonify({'message': 'User created successfully', 'user': new_user}), 201