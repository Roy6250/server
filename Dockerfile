FROM node:12.22.9

#Working Dir
WORKDIR /app

#Creating Package Json Files
ADD package*.json ./

#Install Files
RUN npm install

EXPOSE 5000

ADD server.js ./
CMD [ "node", "server.js"]
