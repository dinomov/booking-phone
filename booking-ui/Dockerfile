FROM node:20-alpine

WORKDIR /booking-ui/

COPY public/ /booking-ui/public
COPY src/ /booking-ui/src
COPY package.json /booking-ui/

RUN npm install


CMD ["npm", "start"]