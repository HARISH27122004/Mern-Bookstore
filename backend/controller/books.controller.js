
import { Book } from "../models/bookModel.js";

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    }
    catch (e) {
        console.log("error ", e);
        res.status(500).json({ message: e.message })
    }
};

export const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }
        res.status(200).json(book);
    }
    catch (e) {
        console.log("error", e);
        res.status(500).json({ message: e.message });
    }
};

export const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(200).json(book);
    }
    catch (e) {
        console.log("error", e);
        res.status(500).json({ message: e.message });
    }
};

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);
        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }
        const updatedBook = await Book.findById(id)
        res.status(200).json(updatedBook);
    }
    catch (e) {
        console.log("error", e);
        res.status(500).json({ message: e.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }
        res.status(200).json({ message: "Book deleted Successfully" });
    }
    catch (e) {
        console.log("error", e);
        res.status(500).json({ message: e.message });
    }
};

