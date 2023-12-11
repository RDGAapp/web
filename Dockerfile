FROM node:18-slim AS build

LABEL maintainer="ilyakopeysk@gmail.com"

WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

FROM nginx:latest
COPY --from=build usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
