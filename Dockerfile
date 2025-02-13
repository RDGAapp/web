FROM oven/bun:1-alpine AS build

LABEL maintainer="ilyakopeysk@gmail.com"

WORKDIR /usr/src/app
COPY package.json ./
COPY bun.lock ./
RUN bun install --frozen-lockfile
COPY . ./
RUN bun run build

FROM nginx:stable-alpine
COPY --from=build usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
