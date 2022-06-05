import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect('mongodb+srv://nicolas:' + process.env.DB_PASSWORD + '@cluster0.ywwm6.mongodb.net/node-express');

export const db = mongoose.connection;