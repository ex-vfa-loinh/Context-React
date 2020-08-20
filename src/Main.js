import React from 'react';
import BookProvider from './context/BookProvider';
import BookNav from './component/books/BookNav';
import BookList from './component/books/BookList';
import BookForm from './component/books/BookForm';
import './index.css'
const Main = () => {
  return (
    <div className = 'container'>
      <BookProvider>
        <div className='book-container'>
          <BookNav />
          <BookList />
          <BookForm />
        </div>
      </BookProvider>
    </div>
  )
}

export default Main;
