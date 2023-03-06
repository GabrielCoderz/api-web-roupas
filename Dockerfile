FROM node:16

WORKDIR /usr/src/app

ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

CMD npm start