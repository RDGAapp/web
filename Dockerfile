FROM node:16.13 AS build

LABEL maintainer="ilyakopeysk@gmail.com"

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:latest
COPY --from=build usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
