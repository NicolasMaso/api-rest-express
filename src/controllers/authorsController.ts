import { Request, Response } from "express";
import { authors } from "../models/Author";

export class AuthorController {
  static listAllAuthors = (req: Request, res: Response) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static listAuthorById = (req: Request, res: Response) => {
    const { id } = req.params;

    authors.findById(id, (err : any, author : typeof authors) => {

        if(err) {
            res.status(400).send({ message: err.message + ' - Author id not found' })
        } else {
            res.status(200).json(author);
        }
    });
  };

  static createAuthor = (req: Request, res: Response) => {
    const author = new authors(req.body);

    author.save((err: any) => {
      if (err) {
        res
          .status(500)
          .send({ message: err.message + "- Failed to create author" });
      } else {
        res.status(201).json(author);
      }
    });
  };

  static updateAuthor = (req: Request, res: Response) => {
    const { id } = req.params;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err : any) => {

        if (!err) {
            res.status(200).send({ message: 'Author updated successfully' });
        } else {
            res.status(500).send({ message: err.message });
        };
    });
  };

  static deleteAuthor = (req: Request, res: Response) => {
    const { id } = req.params;

    authors.findByIdAndDelete(id, (err : any) => {
        if(!err) {
            res.status(200).send({ message: 'Author deleted successfully'});
        } else {
            res.status(500).send({ message: err.message});
        }
    })
  };
}
