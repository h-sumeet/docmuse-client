# Step 1: Use Node.js as the base image
FROM node:20-alpine AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Set environment variables
ENV HOST 0.0.0.0

# Step 4: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 5: Install dependencies
RUN npm install

# Step 6: Copy the entire project to the container
COPY . .

# Step 7: Build the project for production
RUN npm run build

# Step 8: Use Nginx to serve the build files
FROM nginx:stable-alpine

# Step 9: Copy the build folder to the Nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Step 10: Expose port 80
EXPOSE 80

# Step 11: Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
