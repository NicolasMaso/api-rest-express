import express, { Express } from "express";
import { db } from "./config/dbConnect";
import { routes } from "./routes";

db.on("error", console.log.bind(console, 'Connection error'));
db.once("open", () => {
    console.log("Database connection made successfully")
});

export const app : Express = express();

app.use(express.json());

routes(app);