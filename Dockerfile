FROM node:20-alpine3.20 AS build

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:1.27.4-alpine-slim

RUN apk update && apk upgrade --no-cache

COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
