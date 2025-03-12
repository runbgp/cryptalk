FROM node:22-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./
RUN npm install --no-cache --production

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Run the application using npm start
CMD ["npm", "start"]
