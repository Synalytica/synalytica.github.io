FROM node:16-alpine
LABEL author=pk13055 version=1.0
LABEL org.opencontainers.image.source=https://github.com/Synalytica/synalytica.github.io

ENV NODE_ENV=$NODE_ENV
ENV DEBUG=$DEBUG
RUN npm i -g @quasar/cli
WORKDIR /app
COPY package*.json .
VOLUME ["/app/node_modules"]
RUN npm install --save-dev
COPY . .
ENTRYPOINT ["./entrypoint.sh"]
