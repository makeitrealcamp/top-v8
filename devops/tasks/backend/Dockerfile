FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 8000
VOLUME /usr/src/app/src

CMD ["yarn", "dev"]
