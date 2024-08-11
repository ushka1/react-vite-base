# React Vite Base

## Description

This is a base project for a frontend application. It includes a basic structure and some useful tools to start a new project.

## Setup

1. Run `npm install` to install the dependencies.
1. Copy and rename the `.env.example` file to `.env` and set the environment variables.
1. Run `npm run dev` to start the development server.

### Debugging

Setting breakpoints in IDE, etc.

1. Run NPM script using **Debug** button.
1. Open debug browser.
    1. Start additional session in **Run and Debug** using configuration from `launch.json`.
    1. OR click the link in the **JavaScript Debug Terminal**.
    1. OR use `Debug: Open Link` command.

## Docker

1. `docker build  -t ushka1/react-vite-base .`
1. `docker run -p 3000:80 ushka1/react-vite-base`

## Features

- Vite
- TypeScript
- Eslint
- React
- React-Router-Dom
- React-Query
- Zustand
- Material-UI
- Msw
- Docker Configuration
