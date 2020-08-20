import * as actions from './constant';
export const AddBook = (book) => {
    return {
        type: actions.AddBook,
        book
    }
}
export const RemoveBook = (id) => {
    return {
        type: actions.RemoveBook,
        id
    }
}