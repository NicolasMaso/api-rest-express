<p align="left">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> 
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> 
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> 
</p>

## Description

This project is an API Rest that uses the following technologies:
- NodeJS
- Express
- Typescript
- MongoDB (Mongoose)

## Installation

```bash
$ npm install
```
## Configuring the database

- You need to create a MongoDB database and put the URL connection of your database in the /src/config/dbConnect.ts file.
- The only part of the URL that is not in the file is the password, you need to configure the variable DB_PASSWORD in the .env file.

## Configuring the .env

You have to create a .env file in the project directory root and configure the DB_PASSWORD of your MongoDB database.

- DB_PASSWORD=password

## Running the app

```bash
# development
$ npm run dev

```
## Routes

- The API has routes for Author and Book (the only two models of the project), you can check all the routes available in /src/routes, basically has the CRUD (Create, Read, Update and
Delete) operations for both models.
