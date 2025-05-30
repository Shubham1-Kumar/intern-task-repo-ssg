
# Use official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Set environment to production
ENV NODE_ENV=production

# Expose the port your app will run on (will map to 80 via docker-compose)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
