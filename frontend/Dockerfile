FROM node:12-alpine
 RUN apk add --no-cache python g++ make
 WORKDIR /app
 COPY package.json /app/package.json
 RUN npm install --silent
 COPY . /app
 CMD ["npm", "start"]