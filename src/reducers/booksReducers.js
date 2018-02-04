"use strict"

export function booksReducers(state={books:[]}, action){
    switch(action.type){
        case "POST_BOOK":
        let books = state.books.concat(action.payload);
        return {books};
        break;

        case "DELETE_BOOK":
        // create a copy of the current array of books
        const currentBookToDelete = [...state.books]

        // determine at which index in books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(
            function(book){
                return book.id === action.payload.id;
            }
        )
        // use slice to remove the book at the specified index
        return {
            books: [...currentBookToDelete.slice(0, indexToDelete), 
            ...currentBookToDelete.slice(indexToDelete + 1)]
        }
        break;

        case"UPDATE_BOOK":
        const currentBookToUpdate  = [...state.books]
        
        const indexToUpdate = currentBookToUpdate.findIndex(
            function(book){
                return book.id === action.payload.id;
            }
        )
        const newBookToUpdate = {
            ...currentBookToUpdate[indexToUpdate], 
            title: action.payload.title
        }
        return {
            books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
                ...currentBookToUpdate.slice(indexToUpdate + 1)]
        }
    }

    return state
}