FROM node AS Development

WORKDIR /usr/src

COPY package*.json .

RUN yarn install

COPY . .

CMD ["sh", "-c", "npm start"] 