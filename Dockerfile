FROM oven/bun:1-alpine AS build

LABEL maintainer="ilyakopeysk@gmail.com"

WORKDIR /usr/src/app
COPY package.json ./
COPY bun.lockb ./
RUN bun install --frozen-lockfile
COPY . ./
# https://github.com/oven-sh/bun/issues/9486
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build usr/src/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
