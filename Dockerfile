FROM node:24-alpine@sha256:e67514e5d0f6c46656005e1b693b2ec9d52e80b641307de684d4a015ba7a4eaf AS build

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM ghcr.io/nginx/nginx-unprivileged:1.31-alpine-perl@sha256:5c7cc6882faab9bb51a1cb711a90ed7a2c4a4b7ecca319bcb695f69787f4e430 AS app

ENV SHOGUN_GIS_CLIENT_HOST=shogun-gis-client

ARG GIT_COMMIT
ARG APP_VERSION

COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/templates/default.conf.template

# Metadata according to OCI Image Spec
LABEL org.opencontainers.image.authors="info@terrestris.de"
LABEL org.opencontainers.image.created="$(date -u +%Y-%m-%dT%H:%M:%S%z)"
LABEL org.opencontainers.image.source="https://github.com/terrestris/shogun-gis-client"
LABEL org.opencontainers.image.title="The SHOGun WebGIS client"
LABEL org.opencontainers.image.description="Docker image for SHOGun WebGIS client"
LABEL org.opencontainers.image.url=hub.terrestris.de/shogun/shogun-gis-client
LABEL org.opencontainers.image.vendor="terrestris GmbH & Co. KG"
LABEL org.opencontainers.image.licenses="BSD-2-Clause"
LABEL org.opencontainers.image.revision=$GIT_COMMIT
LABEL org.opencontainers.image.version=$APP_VERSION

HEALTHCHECK --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:8080/health || exit 1
