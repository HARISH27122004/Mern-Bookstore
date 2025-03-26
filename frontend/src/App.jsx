import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import CreateBook from '../src/pages/CreateBook'
import EditBook from '../src/pages/EditBook'
import ShowBook from '../src/pages/ShowBook'
import DeleteBook from '../src/pages/DeleteBook'
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App