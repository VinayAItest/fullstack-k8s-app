# -----------------------------
# 1. Build Stage (Node)
# -----------------------------
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build React app
RUN npm run build

# -----------------------------
# 2. Production Stage (Nginx)
# -----------------------------
FROM nginx:stable-alpine AS prod

# Copy built React files to nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
