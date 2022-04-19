# react-geo Client

This template application demonstrates the usage of [react-geo](https://github.com/terrestris/react-geo)
and can easily be installed via the [create-react-geo-app (CRGA)](https://github.com/terrestris/create-react-geo-app)
command line tool.

## Getting started 🧑‍💻

- Install all required dependencies via:

```
npm i
```

- And start the local development server:

```
npm run start
```

The application is now available at [https://localhost:8080](https://localhost:8080).

**Recommendation**: If you already have an existing `docker-compose` setup e.g. providing
a backend, the client should communicate with, we recommend to start the client inside this
setup as this would make redundant the need for several custom configuration
(e.g. a webpack proxy).
To include the client, just extend your existing `docker-compose.yml` with a service similiar
to the following example:

```
react-geo-client-template:
  build:
    context: ../react-geo-client-template
    dockerfile: Dockerfile.dev
  ports:
    - 8080:8080
  volumes:
    - ../react-geo-client-template:/app
```

Please note that your local `node` version should always match the node version inside
the `Dockerfile.dev`.

## e2e tests 🧪

To run the e2e tests locally it's probably required that you install all required browsers and
system dependencies via:

```
npx playwright install
npx playwright install-deps
```

## Road to production 🏭

The build artifact of the client can either be build via

```
npm run build
```

or directly included in an `nginx` based Docker image via:

```
docker build -t react-geo-client:1.0.0 .
```

(Run `docker run -p 80:80 react-geo-client:1.0.0` to start it locally.)

## Contribution

Contributions are much appreciated! 🥳

Read the hints for developers to get started. We look forward to your contributions!
