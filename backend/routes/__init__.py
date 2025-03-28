from flask import Blueprint

# Importera alla routes
from backend.routes.main_routes import main_routes
from backend.routes.auth_routes import auth_routes


__all__ = ["main_routes", "auth_routes"]
