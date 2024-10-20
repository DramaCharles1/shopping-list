FROM node:18-alpine
WORKDIR /shopping_list/frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]