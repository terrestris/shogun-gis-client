FROM node:20-alpine3.20 AS build

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM ghcr.io/nginx/nginx-unprivileged:1.29-alpine-perl AS app

ENV SHOGUN_GIS_CLIENT_HOST=shogun-gis-client

COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/templates/default.conf.template

# Metadata according to OCI Image Spec
LABEL org.opencontainers.image.authors="info@terrestris.de"
LABEL org.opencontainers.image.created="$(date -u +%Y-%m-%dT%H:%M:%S%z)"
LABEL org.opencontainers.image.source="https://github.com/terrestris/shogun-gis-client.git"
LABEL org.opencontainers.image.title="The SHOGun WebGIS client"
LABEL org.opencontainers.image.description="Docker image for SHOGun WebGIS client"
LABEL org.opencontainers.image.url=https://terrestris.de
LABEL org.opencontainers.image.vendor="terrestris GmbH & Co. KG"

HEALTHCHECK --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:8080/health || exit 1
