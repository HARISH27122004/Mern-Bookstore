import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5555;
const app = express();

app.use(cors())

app.use(express.json())

app.use('/books', bookRoutes)

mongoose.connect(process.env.mongoDBURI)
    .then(() => {
        console.log("successfully connected");

        app.listen(PORT, () => {
            console.log(`Server is running on : http://localhost:5555/`);
        });
    })

    .catch((e) => {
        console.log("Cannot connect to the DB", e);
    });