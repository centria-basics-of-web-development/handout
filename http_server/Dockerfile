FROM node:20-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY --chown=node:node . /app

USER node

CMD ["node", "index.js"]