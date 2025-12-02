# Build stage
FROM node:24-slim AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod

COPY . .

RUN pnpm run build

# runtime stage
FROM node:24-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3131

CMD ["node", "dist/server.js"]
