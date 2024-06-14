import { getBooks, getSingleBook, updateBooks, deleteBooks, addBooks } from '../controllers/Book.js'
import express from 'express';

const books_router = express.Router();

books_router.get('/', getBooks)

books_router.get('/:id', getSingleBook)

books_router.post('/', addBooks)

books_router.put('/:id', updateBooks)

books_router.delete('/:id', deleteBooks)

export { books_router }