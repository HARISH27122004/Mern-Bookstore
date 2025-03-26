import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import '../css/showBook.css'

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }, [id])
  return (
    <div className='container1'>
      <BackButton />
      <h1 className='h1-show'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='inside-container'>
          <div id='id'>
            <span>Id</span>
            <span>{book._id}</span>
          </div>

          <div id='title'>
            <span>Title</span>
            <span>{book.title}</span>
          </div>

          <div id='author'>
            <span>Author</span>
            <span>{book.author}</span>
          </div>

          <div id='publish'>
            <span>PublishYear</span>
            <span>{book.publishYear}</span>
          </div>

          <div id='create'>
            <span>Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div id='update'>
            <span>Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>

        </div>
      )}
    </div>
  )
}

export default ShowBook