# Microservices Proof of Concept (PoC)

This project is a Microservices Proof of Concept (PoC) designed to showcase the feasibility and advantages of a microservices architecture. The architecture utilizes Docker Compose for orchestration, Traefik as an API Gateway, and Redpanda for asynchronous inter-service communication. The PoC emphasizes scalability, fault tolerance, and independent deployment.

## Table of Contents

- [Components](#components)
- [Implementation Steps](#implementation-steps)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [License](#license)

## Components

### Tools Roadmap

| Sr. No. | ⚡ Components                                   |🚧 Current Tools|🚧 Future Tools |
|---------|---------------------------------------------|-----------------|--------------|
| 1.      | 🚀 Orchestration                               | 🐳 Docker Compose  | Kubernetes    |
| 2.      |🚩 API Gateway / Reverse Proxy                                | 🚦 Traefik         | Traefik    |
| 3.      |⚙️ Service Registry                            | 🚦 Traefik         | Consul    |
| 4.      | ⚖️ Load Balance                                | 🚦 Traefik         | Traefik    |
| 5.      | ⚕️ Health Check                                | 🚦 Traefik         | Traefik via Consul    |
| 6.      | 🔁 IPC - async   | 🐼 Redpanda        | Redpanda    |
| 7.      | 🔁 IPC - sync    | NA              | NA    |

### Docker Compose

- Orchestration tool for defining and running multi-container Docker applications.
- Manages deployment and scaling of microservices.

### Traefik

- API Gateway for routing, reverse proxy, and load balancing.
- Dynamically integrates with Docker for configuration.
- Supports health checks for backend services.

### Redpanda

- Message broker for inter-service communication.
- Facilitates asynchronous communication between microservices.

### Services

#### Web-Based Services

- Expose REST API endpoints for communication.
- Register themselves with Traefik for dynamic routing.
- Implement health check endpoints for basic service health monitoring.
- Implement Redpanda producers for async communication.

#### Non-Web-Based Process Services

- Perform background tasks or specific processes.
- Implement health check endpoints for basic service health monitoring.
- Implement Redpanda consumers for async, inter-service communication.

## Implementation Steps

1. **Service Development:**
   - Develop individual microservices in Node.js and Python.
   - Implement basic health check endpoints for Traefik.
   - Integrate Redpanda for asynchronous inter-service communication.
   - Implement code to showcase inter-service communication via REST/HTTP.

2. **Docker Compose Configuration:**
   - Define the Docker Compose configuration for deploying microservices.
   - Specify dependencies and inter-service communication settings.
   - Utilize Docker's replica feature for scalability testing.

3. **Traefik Integration:**
   - Configure Traefik to act as the API Gateway.
   - Enable Traefik to dynamically discover and route requests to microservices.
   - Utilize Traefik labels for service registration and health checks.

4. **Redpanda Integration:**
   - Implement Redpanda for asynchronous communication between microservices.
   - Showcase the decoupling of microservices through message queuing.

5. **Testing:**
   - Conduct thorough testing of microservices interactions.
   - Test scalability by deploying multiple instances using Docker replicas.
   - Evaluate the effectiveness of health checks, service discovery, and Redpanda communication.

6. **Documentation:**
   - Provide detailed documentation for deploying and running microservices.
   - Include instructions for monitoring and troubleshooting.

7. **Future Considerations:**
   - Consider transitioning to Docker Swarm or Kubernetes for production use.
   - Explore additional features offered by these orchestrators for scalability and fault tolerance.
   - Implement security measures and centralized logging.

## Folder Structure

        project-root/
        |-- nodejs-microservice/
        |   |-- app.js
        |   |-- Dockerfile
        |
        |-- non-web-service/
        |   |-- app.js
        |   |-- Dockerfile
        |
        |-- python-flask-microservice/
        |   |-- app.py
        |   |-- Dockerfile
        |   |--requirements.txt
        |
        |-- docker-compose.yml
        |-- README.md


## Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd microservices-poc
2. Build and run the services:

    ```bash
    docker compose up --build

3. Build and run after by scaling the services:
   ```bash
   docker compose up --build -d --scale nodejs-microservice=2 --scale python-flask-microservice=2 --scale non-web-service=2

4. Access the microservices at the specified endpoints.

## License

This project is licensed under the MIT License.


