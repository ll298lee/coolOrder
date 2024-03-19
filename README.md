
# Food Order System Client Demo

This project is a demonstration of a food order system client built using Next.js. Below are some key details about the project:

- **Project Name:** Food Order System Client Demo
- **Next.js Version:** 14.1.3
- **React Version:** 18
- **Demo URL:** [Food Order System Demo](https://cool-order-1lcuwj25f-ll298lee.vercel.app/)
- **Node.js Version:** 18.18.0
- **Yarn Version:** 1.22.22

## Getting Started

To get a local copy of this project up and running, follow these steps:
(Make sure you are using Node.js version >= 18.18.0)

1. Clone the repository using the following command:

    ```bash
    git clone git@github.com:ll298lee/coolOrder.git
    ```

2. Install the necessary packages by running:

    ```bash
    cd coolOrder
    yarn install
    ```

## Local Development

To start the local development server, use the following command:

```bash
yarn dev
```
This will start a local server at http://localhost:3000

## Running Tests

To run tests for the project, execute the following command:
```bash
yarn test
```

## Troubleshoot
If you encounter error when running test that looks like
```
Error [ERR_REQUIRE_ESM]: require() of ES Module string-width/index.js
...
```

Make sure you are using yarn version 1.22.22 and then delete `/node_modules` and `yarn.lock` and run `yarn install` again
