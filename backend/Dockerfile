# -----------------------------
# 1. Base image
# -----------------------------
FROM node:18-alpine AS base
WORKDIR /app

# -----------------------------
# 2. Install dependencies
# -----------------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# -----------------------------
# 3. Build TypeScript
# -----------------------------
FROM deps AS build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# -----------------------------
# 4. Production image
# -----------------------------
FROM node:18-alpine AS prod
WORKDIR /app

# Copy only necessary files
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./

# Expose backend port
EXPOSE 3000

# Start backend
CMD ["node", "dist/server.js"]
