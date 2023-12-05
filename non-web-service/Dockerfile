# non-web-service/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

# CMD ["tail", "-f", "/dev/null"]
CMD ["node", "app.js"]
