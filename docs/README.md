# APC Code Challange

## Table of Contents

- [About](#about)
- [Installation](#installation)
  * [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to Use](#how-to-use)
- [Technology Stack](#technology-stack)
- [Structure](#structure)
  * [Folder Structure](#folder-structure)

### About

this is a code challenge for Amsterdam platform creation. I deployed this project to Heroku server in here. 

https://apc-code-app-prod.herokuapp.com/

it's also have CI/CD with Travis CI for github.
### Installation

#### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
 purposes. See deployment for notes on how to deploy the project on a live system.


#### Prerequisites

Before you can start running this project, make sure you have the following software's installed on your machine:

- `Git`
- `Node.js` and `npm`

#### How to Use

In order to grab a copy of the project and run it, you have to clone it via `Git` and then run the following command:

```bash
# Install project dependencies
npm i
```

To start a development server with HMR-enabled:

```bash
# Run a development server on localhost:8585 by default
npm start
```

Other useful commands:

```bash
# Build the project in a development mode
npm run dev

# Build the project in a production mode
npm run build
```

#### Technology Stack
  Our technology stack includes:
   * React  | [Read more](https://reactjs.org/)
   * Redux | [Read more](https://redux.js.org/)
   * Redux-Saga | [Read more](https://redux-saga.js.org/)
   * TypeScript | [Read more](https://www.typescriptlang.org/)
   * Babel | [Read more](https://babeljs.io/)
   * Jest | [Read more](https://jestjs.io/)
   * Enzyme | [Read more](https://airbnb.io/enzyme/)
   * Cypress | [Read more](https://cypress.io/)
   * StyledComponent | [Read more](https://github.com/styled-components/styled-components)
   * CI/CD using Travis CI for github and gitlab CI for gitlab (mirror of github)
   * docker and Docker-compose to running project easier 
   * Heroku


  you can deploy project to Heroku by pushing to main branch in github. you can also use gitlab CI by pushing to main branch on miror repo on gitlab(the origin name is gitlab )
### Structure
   
#### Folder Structure

```
apc-code-challenge
├── docs
│   ├── assets
│   │   ├── images we use in docs
│   ├── README.md
├── node_modules

├── build # Compiled files (just server file is saved as index.js)

├── public # public assets

├── src # main project logic files

│ ├── assets # main assets files that will be bundled by React and won't be cached (because of hash). I put only main images in here.


│ ├── providers # main app providers (inclduing error provider. error-handler for my project is often use for a source of error handling for all error happening in project. but we don't have enough data to use here and didn't have time to do so it's not working and just here for showcase my works.

│ │ ├── router-provider # main router file and it's configuration

│ │ ├── store-provider # inject store and configs (usefull when you have other data providers than just one redux store)

│ │ ├── theme-provider # main theme provider and theme configs

│ ├── services # main app services(usualy use it but we don't need any service in here)

│ ├── Store # main Store. I seperated modules for better readability(because of small usage, it's not really neccessary)

│ ├── Styles # main general Styles.

│ ├── UI # main React components including layouts, pages, logical components that might be used or shared in diffrent pages(common) and stateless UI components that are mainly use to show basic UI (base-components)

│ ├── utils # utilites that are generaly used in project. here is arrays and strings


├── Dockerfile.prod # docker file to build the production ready version

├── Dockerfile # main docker file to run dev server with dev features (hot reload and ...)

├── docker-compose # docker-compose file to build and run docker file
├── .env => configs of the website like BASE_URL, SITE_TITLE and etc
├── .gitignore
├── LICENSE.md
├── package.json
├── README.md
├── tsconfig.json => typescript config file

```

