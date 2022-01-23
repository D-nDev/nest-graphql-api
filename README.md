<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Dependencies(Using Docker)

- Visual Studio Code OR another Modern IDE
- Docker
- Docker Compose
- Ports 4000 and 5432 opened and free
- PG Admin(Recommended)
- Postman(Recommended)

Clone the project

```bash
  git clone https://github.com/D-nDev/nest-graphql-api.git
```

Go to the project directory

```bash
  cd nest-graphql-api
```

Run Docker compose
```bash
  docker-compose up --build --force-recreate -d
```

Server will be available at:

- localhost:4000/graphql - GraphQL Playground
## Dependencies(If you'll not use docker)

For this project you'll need:

* Visual Studio Code OR another Modern IDE
* Postgres
* Postman(Highly Recommended)
* PG Admin(Recommended)
* NPM or Yarn
## Run Locally

Clone the project

```bash
  git clone https://github.com/D-nDev/nest-graphql-api.git
```

Go to the project directory

```bash
  cd nest-graphql-api
```

Install dependencies

```bash
  npm install or yarn
```

**IMPORTANT: Configure your .env following the .env.example BEFORE GO TO THE NEXT STEP**

After, Run Prisma migrations

```bash
  npx prisma migrate dev --name init && npx prisma generate
```

**Important: after this re-open your visual studio code/IDE**

Start the DEV server

```bash
  npm run start:dev or yarn start:dev
```

**OR**

To Build for production

```bash
  npm run build or yarn build
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file, **follow the .env.example**

`DATABASE_URL`


## API Reference(GraphQL)

#### Create one product(mutation)

```
  mutation createProduct{
    createProduct(data:{
      name: "productName",
      manufacturer: "productManufacturer",
      stock: 2,
      price: 15
    }){
      id
      name
      manufacturer
      stock
      price
    }
}
```

#### Get all products(Query)

```
  query getProducts {
  products{
    id,
    name,
    manufacturer,
    price,
    stock
  }
}
```

#### Get One product(query)

```
query getProduct {
  product(id: 1){
    id,
    name,
    manufacturer,
    price,
    stock
  }
}

```

#### Delete One product(mutation)

```
mutation deleteProduct {
  deleteProduct(id: 1)
}

```

#### Update One product(mutation)

```
mutation updateProduct{
  updateProduct(data: {
    name: "testupdate"
  }id: 1){
    id,
    name,
    manufacturer,
    price,
    stock
  }
}

```

#### Count products(query)

```
query countProducts {
  countProducts
}

```

#### Low Stock(query)

```
query lowestStock {
  lowestStock{
    id,
    name,
    manufacturer,
    price,
    stock
  }
}

```

#### Great Stock(query)

```
query highestStock {
  highestStock{
    id,
    name,
    manufacturer,
    price,
    stock
  }
}

```

#### No Stock(less than 5);(query)

```
query noStock {
  noStock{
    id,
    name,
    manufacturer,
    price,
    stock
  }
}

```


## Running Tests

To run tests, you need:

- An instance of a psql running locally or inside docker

After, run the following command

```bash
  npm run test or yarn test
```

