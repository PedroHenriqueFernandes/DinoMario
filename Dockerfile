FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

#Copy app.js
COPY app.js ./

# Copy public folder
COPY public ./public

# Install app dependencies
RUN npm install

# Expose port 80
EXPOSE 80

# Run the app
CMD [ "npm", "start" ]