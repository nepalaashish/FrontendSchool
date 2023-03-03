FROM node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]



FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]