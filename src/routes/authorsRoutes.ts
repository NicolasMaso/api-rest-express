import express, { Router } from "express";
import { AuthorController } from "../controllers/authorsController";

const router: Router = express.Router();

router
  .get("/authors", AuthorController.listAllAuthors)
  .get("/authors/:id", AuthorController.listAuthorById)
  .post("/authors", AuthorController.createAuthor)
  .put("/authors/:id", AuthorController.updateAuthor)
  .delete("/authors/:id", AuthorController.deleteAuthor)

export default router;
