import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Enter title"]
        },
        author: {
            type: String,
            required: [true, "Enter author"]
        },
        publishYear: {
            type: Number,
            required: [true, "Enter Publish Year"]
        }
    },
    {
        timestamps: true
    }
)

export const Book = mongoose.model("Books", bookSchema)



