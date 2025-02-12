FROM node:18-alpine
WORKDIR /shopping_list/frontend
COPY package*.json ./
RUN npm install
COPY . .
# Build the React app for production
RUN npm run build
#For development only
#EXPOSE 3000
#CMD ["npm", "start"]