FROM node:24-alpine@sha256:fb71d01345f11b708a3553c66e7c74074f2d506400ea81973343d915cb64eef0 AS build

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM ghcr.io/nginx/nginx-unprivileged:1.31-alpine-perl@sha256:cb4fb86d2a93065dce4451d99b6a96ca0fd83caeee98a3bc24c5f5c6d6d58e5d AS app

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
LABEL org.opencontainers.image.url=docker-public.terrestris.de/terrestris/shogun-gis-client
LABEL org.opencontainers.image.vendor="terrestris GmbH & Co. KG"
LABEL org.opencontainers.image.licenses="BSD-2-Clause"
LABEL org.opencontainers.image.revision=$GIT_COMMIT
LABEL org.opencontainers.image.version=$APP_VERSION

HEALTHCHECK --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:8080/health || exit 1
