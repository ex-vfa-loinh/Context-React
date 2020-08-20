import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';

const BookNav = () => {
    const {books} = useContext(BookContext);
    return (
        <div className='book-nav'>
            <h2 style={{marginLeft: '40px', color: '#5c85d6'}}>The number of book is: <b>{books.length} </b>in my libary :)</h2>
        </div>
    )
}

export default BookNav;
