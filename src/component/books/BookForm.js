import React, { useState, useContext } from 'react';
import * as actions from '../../actions/Book';
import { BookContext } from '../../context/BookProvider';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const onAddBook = (e) => {
        e.preventDefault();
        dispatch(actions.AddBook({title, author}));

        setTitle('');
        setAuthor('');
    }
    return(
        <form onSubmit = {onAddBook} className = 'book-list'>
            <div>
                <input type = 'text' className='input' value = {title} onChange = {(e) => setTitle(e.target.value)} placeholder = 'Title of the book' />
                <input type = 'text' className='input' value = {author} onChange = {(e) => setAuthor(e.target.value)} placeholder = 'Author of the book' />
                <input type = 'submit' value ='Add Book' />
            </div>
        </form>
    )
}

export default BookForm;