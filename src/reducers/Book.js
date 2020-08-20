import * as actions from '../actions/constant';
export const BookReducer = (state, action) => {
    switch(action.type) {
        case actions.AddBook: {
            return [...state, {...action.book}]
        }
        case actions.RemoveBook: {
            return state.filter(book => book.id !== action.id)
        }
        default: {
            return state;
        }
    }
}