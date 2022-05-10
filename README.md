# Feedget

<p align="center">
  <img alt="Developer" src="https://img.shields.io/badge/developer-jfilipedias-blue">
  <img alt="GitHub" src="https://img.shields.io/github/license/jfilipedias/feedget">
</p>
<br>

Feedget is a feedback widget developed on Next Level Week event hosted by [Rocketseat](https://rocketseat.com.br/).

The project goal is to provide a simple and easy way to send feedback to the developers. The user can take a screenshot to report a bug, suggest a feature or leave a comment. The feedback is sent to the developers via email.

The application has a backend in [NodeJS](https://nodejs.org/) that is running on [Railway](https://railway.app/) with a [PostgreSQL](https://postgresql.org/) database, a web frontend developed with [ReactJS](https://reactjs.org/) hosted on [Vercel](https://vercel.com) and a mobile app built with [React Native](https://reactnative.dev/). You can test the web frontend clicking on this [link](https://feedget-htxnte13w-jfilipedias.vercel.app).

<div align="center">
  <img alt="Feedget" title="Feedget" src=".github/assets/cover.png" />
</div>

## Technologies
- [Typescript](https://typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [NodeJS](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [Prisma](https://prisma.io/)
- [Mailtrap](https://mailtrap.io/)
- [Expo](https://expo.dev/)

## Getting started

### Backend

Install the dependencies:
```shell
cd server
yarn
```

The backend need some environment variables setup:
```shell
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
MAILTRAP_USER=111111111 
MAILTRAP_PASS=111111111
```

You should have a postgres database running. Then you need to run the migrations:
```shell
yarn prisma migrate dev
```
Run the server:
```shell
yarn dev
```

### Web Frontend

Install the dependencies:
```shell
cd web
yarn
```
Start the application:
```shell
yarn dev
```

### Mobile

Install the dependencies:
```shell
cd mobile
yarn
```

Start the application:
```shell
expo start
```

## License
This project is licensed under the MIT. Consult the [LICENSE](LICENSE) for more information.
