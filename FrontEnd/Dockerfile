# Use an official NGINX image to serve static content
FROM nginx:alpine

# Copy the frontend files into the NGINX HTML directory
COPY index.html /usr/share/nginx/html/index.html
COPY app.js /usr/share/nginx/html/app.js

# Expose the port the app will run on
EXPOSE 8080

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
