# Base image for build
FROM node:18-alpine AS build

# Set workdir
WORKDIR /app
# Copy package files
COPY package*.json .
# Install dependencies
RUN npm install
# Copy project files
COPY . .

# Set environment variables
ENV VITE_API_BASE_URL="http://localhost:8080"
# Build the project
RUN npm run build

# Base image for release
FROM nginx:stable-alpine AS release

# Update packages and install bash
RUN apk update && apk --no-cache add bash
# Copy nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Set workdir
WORKDIR /app/dist
# Copy built project from build stage
COPY --from=build /app/dist .

# Copy container scripts
COPY ./container .
# Make start script executable
RUN ["chmod", "+x", "./start.sh"]

# Expose port 80
EXPOSE 80

# Start the app using bash
CMD ["bash", "start.sh"]
