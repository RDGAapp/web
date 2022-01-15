FROM tiangolo/node-frontend:latest AS build

LABEL maintainer="ilyakopeysk@gmail.com"

RUN npm install yarn
RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN yarn && yarn build

FROM nginx:latest
RUN mkdir -p /var/www/client
COPY --from=build /app/build /var/www/client
COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf
