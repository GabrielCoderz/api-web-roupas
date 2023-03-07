# Build dependencies
FROM node:17-alpine as dependencies
# WORKDIR /app
# WORKDIR /src
COPY package.json .
RUN npm i
COPY . . 
# Build production image
FROM dependencies as builder
RUN npm run build && npx prisma db push
CMD npm run start 
