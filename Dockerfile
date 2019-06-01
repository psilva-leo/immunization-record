# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

# start app
EXPOSE 5000
CMD ["node", "server.js"]