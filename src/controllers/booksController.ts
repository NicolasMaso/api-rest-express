import { Request, Response } from "express";
import { books } from "../models/Book";

export class BookController {
  static listAllBooks = (req: Request, res: Response) => {
    books
      .find()
      .populate("author")
      .exec((err, books) => {
        res.status(200).json(books);
      });
  };

  static listBookById = (req: Request, res: Response) => {
    const { id } = req.params;

    books
      .findById(id)
      .populate("author", "name")
      .exec((err: any, book: typeof books) => {
        if (err) {
          res
            .status(400)
            .send({ message: err.message + " - Book id not found" });
        } else {
          res.status(200).json(book);
        }
      });
  };

  static createBook = (req: Request, res: Response) => {
    const book = new books(req.body);

    book.save((err: any) => {
      if (err) {
        res
          .status(500)
          .send({ message: err.message + "- Failed to create book" });
      } else {
        res.status(201).json(book);
      }
    });
  };

  static updateBook = (req: Request, res: Response) => {
    const { id } = req.params;

    books.findByIdAndUpdate(id, { $set: req.body }, (err: any) => {
      if (!err) {
        res.status(200).send({ message: "Book updated successfully" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteBook = (req: Request, res: Response) => {
    const { id } = req.params;

    books.findByIdAndDelete(id, (err: any) => {
      if (!err) {
        res.status(200).send({ message: "Book deleted successfully" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static listBookByPublisher = (req: Request, res: Response) => {
    const { publisher } = req.query;

    books.find({ 'publisher': publisher}, {}, (err, books) => {
      if (!err) {
        res.status(200).send(books);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  
  };
}
