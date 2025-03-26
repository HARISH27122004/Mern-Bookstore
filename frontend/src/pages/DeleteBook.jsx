import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/deleteBook.css'

const DeleteBook = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((e) => {
        loading(false);
        alert('An Error Occured! , Please Check Console')
        console.error(e);
      })
  }

  return (
    <div className='container3'>
      <h1>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div id='inner-div'>
        <h3>Are You Sure You Want to delete this book?</h3>
        <div className='button-container'>
          <button onClick={handleDeleteBook} className='delete-btn'>
            Yes, Delete it.
          </button>
          <BackButton />
        </div>

      </div>
    </div>
  )
}

export default DeleteBook