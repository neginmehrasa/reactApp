"use strict"

export function booksReducers(state={
    books:[{
        _id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price:44.33
    },
    {
        _id: 2,
        title: 'this is the second book title',
        description: 'this is the second book description',
        price: 50.99
    }]
}, action){
    switch(action.type){
        case "GET_BOOKS":
        return {...state, books:[...state.books]};
        break;

        case "POST_BOOK":
        //let books = state.books.concat(action.payload);
        return {books: [...state.books, ...action.payload]};
        break;

        case "DELETE_BOOK":
        // create a copy of the current array of books
        const currentBookToDelete = [...state.books]

        // determine at which index in books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(
            function(book){
                return book._id === action.payload._id;
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
                return book._id === action.payload._id;
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