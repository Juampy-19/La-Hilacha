FROM node:20.16.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY app.js ./
COPY controllers ./controllers
COPY database ./database
COPY middlewares ./middlewares
COPY public ./public
COPY routes ./routes
COPY views ./views
COPY .sequelizerc ./
EXPOSE 3000
CMD ["npm", "start"]
