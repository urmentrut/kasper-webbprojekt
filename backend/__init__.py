from flask import Flask
from flask_cors import CORS
from backend.config import config
from backend.routes import main_routes, auth_routes  

def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    
    CORS(app)

    # Registrera Blueprints
    app.register_blueprint(main_routes)
    app.register_blueprint(auth_routes)

    return app
