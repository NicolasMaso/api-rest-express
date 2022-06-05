import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    nationality: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export const authors = mongoose.model("authors", authorSchema);
