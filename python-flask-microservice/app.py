from flask import Flask, jsonify

app = Flask(__name__)
port = 5000

# Define a simple endpoint
@app.route('/')
def hello():
    print("Hello! ==> ")
    return jsonify(message='Hello from Python Flask microservice!')

# Register with Traefik
@app.before_request
def register_with_traefik():
    headers = {
        'X-Traefik-Backend': 'python-flask-microservice',
    }
    return '', 200, headers

# Health check endpoint
@app.route('/health')
def health_check():
    print("Healthy! ==> ")
    return 'OK', 200

# Start the server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
