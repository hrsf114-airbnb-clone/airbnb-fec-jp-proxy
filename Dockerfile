FROM node:11.13.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 9001

CMD [ "npm", "run", "server" ]