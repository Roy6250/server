FROM node:12.22.9

#Working Dir
WORKDIR /app

#Creating Package Json Files
ADD package*.json ./

#Install Files
RUN npm install


ADD index.js ./
CMD [ "node", "index.js"]
