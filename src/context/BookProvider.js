import React, {createContext, useReducer, useEffect} from 'react';
import { BookReducer } from '../reducers/Book';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('data');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value = {{ books, dispatch }} >
            { props.children }
        </BookContext.Provider>        
    )
}

export default BookContextProvider;