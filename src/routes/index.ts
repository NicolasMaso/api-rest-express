import express, { Request, Response, Express } from "express";
import books from "./booksRoutes";
import authors from "./authorsRoutes";

export const routes = (app: Express) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send({ title: "API Rest" });
  });

  app.use(express.json(), books, authors);
};
