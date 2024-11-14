# Use an official Node.js image as a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN npm install

# Expose the port the app will run on
EXPOSE 80

# Command to run the app
CMD ["npm", "start"]
