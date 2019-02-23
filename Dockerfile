# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY build/ ./
RUN npm install -g serve

COPY . .

# start app
EXPOSE 5000
CMD ["serve", "-s", "build"]