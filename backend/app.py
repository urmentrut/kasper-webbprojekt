from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from database import mongo
from config.db import db
from flask_pymongo import PyMongo
#from routes.auth_routes import auth_bp
from routes.player_routes import player_bp
from routes.questlog_routes import questlog_bp
from routes.livetracker_routes import livetracker_bp
from routes.achievement_routes import achievement_bp
from routes.bosslog_routes import bosslog_bp
from routes.user_routes import user_bp
from models.player_stats import PlayerStats
from config.db import player_collection

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/osrs-tracker"
CORS(app, origins=["http://localhost:5173", "http://localhost:5174"])
mongo = PyMongo(app)
JWTManager(app)
mongo.init_app(app)

# Registrera alla rutter
#app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(player_bp, url_prefix="/player")  #Burak
app.register_blueprint(questlog_bp, url_prefix="/questlog")
app.register_blueprint(livetracker_bp, url_prefix="/livetracker")
app.register_blueprint(achievement_bp, url_prefix="/achievements")
app.register_blueprint(bosslog_bp, url_prefix="/bosslog")
app.register_blueprint(user_bp, url_prefix="/user")

if __name__ == "__main__":
    app.run(debug=True)
