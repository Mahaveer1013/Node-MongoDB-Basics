import { getBooks, getSingleBook, updateBooks, deleteBooks, addBooks } from '../models/Books_model.js'
import express from 'express';

export const books_router = express.Router();

books_router.get('/', getBooks)

books_router.get('/:id', getSingleBook)

books_router.post('/', addBooks)

books_router.put('/:id', updateBooks)

books_router.delete('/:id', deleteBooks)