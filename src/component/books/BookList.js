import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import * as actions from '../../actions/Book';

const BookList = () => {
    const { books, dispatch } = useContext(BookContext);

    return books.length > 0? (
        <div className = 'book-list'>
            <ul>
                {books.map((item, index) => (
                    <li key = { index }> 
                        <div> {item.title} </div>
                        <div> {item.author} </div>
                        <span className = 'delete-icon' onClick = { () => dispatch(actions.RemoveBook(item.id)) }>X</span>
                    </li>
                    
                ))}
            </ul>
        </div>
    ): (
        <div className = 'book-list'> No book to view</div>
    )
}

export default BookList;