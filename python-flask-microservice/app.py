from flask import Flask, jsonify, request
import socket

app = Flask(__name__)
port = 5000


# Define a simple endpoint
@app.route('/')
def hello():
    # Register with Traefik
    headers = {
        'X-Traefik-Backend': 'python-flask-microservice',
    }
    # print("Hello! ==> ")
    # Get the hostname of the server
    server_hostname = socket.gethostname()

    # Get the IP address associated with the server's hostname
    server_ip = socket.gethostbyname(server_hostname)
    return jsonify(message=f'Hello from Python Flask microservice ({server_ip})!'), 200, headers


# Health check endpoint
@app.route('/health')
def health_check():
    # print("Healthy! ==> ")
    return 'OK', 200

# Start the server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
