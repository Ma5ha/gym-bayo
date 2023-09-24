
FROM node:18-alpine
WORKDIR /gym-bayo
COPY . .
RUN npm install
EXPOSE 3333