from node:8-slim

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 8000
CMD ["npm", "start"]