# Stage 1: build
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm exec vitepress build

# Stage 2: serve with nginx
FROM nginx:alpine
COPY --from=build /app/.vitepress/dist /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
