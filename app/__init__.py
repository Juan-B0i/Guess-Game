from flask import Flask

app = Flask(__name__, template_folder='templates')

# Importar las rutas después de crear la aplicación Flask
from app import routes

# Configuración para servir archivos estáticos
app.static_url_path = '/static'
app.static_folder = 'static'
