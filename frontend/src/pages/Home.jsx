import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/home.css'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books')
            .then((res) => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [])
    return (
        <div className='container'>
            <div>
                <h1>Books List</h1>
                <Link to={'/books/create'} className='createLink'>
                    <i className="fas fa-plus"></i> Create
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>PublishYear</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className='tr-data'>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {book.title}
                                </td>
                                <td>
                                    {book.author}
                                </td>
                                <td>
                                    {book.publishYear}
                                </td>
                                <td>
                                    <div>
                                        <Link to={`/books/details/${book._id}`}>
                                            <i className="fas fa-info-circle"></i>
                                        </Link>

                                        <Link to={`/books/edit/${book._id}`}>
                                            <i className="fas fa-edit"></i>
                                        </Link>

                                        <Link to={`/books/delete/${book._id}`}>
                                            <i className="fas fa-trash"></i>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Home