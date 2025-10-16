import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/createBook.css'

const EditBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setTitle(res.data.title);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        alert('An error Occured! , Please Check Console');
        console.error(e);
      })
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios.put(`https://mern-bookstore-m0tg.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        alert('An error Occured')
        console.error(err);
      })
  }

  return (
    <div className='container2'>
      <h1 className='h1-tag'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div>
        <div className='inner-div'>
          <label>Title</label>
          <input type="text"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} />
        </div>

        <div>
          <label>Author</label>
          <input type="text"
            value={author}
            onChange={(e) => { setAuthor(e.target.value) }} />
        </div>

        <div>
          <label>PublishYear</label>
          <input type="text"
            value={publishYear}
            onChange={(e) => { setPublishYear(e.target.value) }} />
        </div>
        <button onClick={handleEditBook} className='save-btn'>
          Save
        </button>

        <BackButton />

      </div>
    </div>
  )
}

export default EditBook