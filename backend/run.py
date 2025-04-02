import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from config.db import db
from routes.user_routes import user_routes

# Create Flask app
def create_app():
    app = Flask(__name__)
    CORS(app)  # Allow frontend to communicate with backend

    # Import and register your routes
    
    app.register_blueprint(user_routes, url_prefix="/api")  # Register blueprint with url_prefix "/api"

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
