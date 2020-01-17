FROM node:10.15.0

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

