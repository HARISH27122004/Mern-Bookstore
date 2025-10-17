import express from 'express'
const router = express.Router();
import { getBook, getBooks, createBook, updateBook, deleteBook } from '../controller/books.controller.js'

router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/', createBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

export default router;

