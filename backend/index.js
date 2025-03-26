import express from 'express';
import { mongoDBURL, PORT } from './config.js';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.json())

app.use('/books', bookRoutes)

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("successfully connected");

        app.listen(PORT, () => {
            console.log(`Server is running on : http://localhost:5555/`);
        });
    })

    .catch((e) => {
        console.log("Cannot connect to the DB", e);
    });