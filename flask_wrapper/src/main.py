from flask import Flask, send_from_directory, request, jsonify
import os

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    try:
        # Try to serve static file first
        return send_from_directory('static', path)
    except:
        # For SPA routing, return index.html for non-static files
        return send_from_directory('static', 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=False)

