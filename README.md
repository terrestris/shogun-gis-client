# react-geo Client

This template application demonstrates the usage of [react-geo](https://github.com/terrestris/react-geo).

## Get stared 🧑‍💻

```
npm i
```

```
npm run start
```

[https://localhost:8080](https://localhost:8080)

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

## Road to production 🏭

```
npm run build
```

```
docker build -t react-geo-client:1.0.0 .
docker run -p 80:80 react-geo-client:1.0.0
```

## Contribution

Contributions are much appreciated! 🥳

Read the hints for developers to get started. We look forward to your contributions!
