import express, { Router } from "express";
import { BookController } from "../controllers/booksController";

const router: Router = express.Router();

router
  .get("/books", BookController.listAllBooks)
  .get("/books/find", BookController.listBookByPublisher)
  .get("/books/:id", BookController.listBookById)
  .post("/books", BookController.createBook)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook)

export default router;
