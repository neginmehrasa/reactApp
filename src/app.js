"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINE REDUCERS
import reducers from './reducers/index';

//IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, updateBooks, deleteBooks} from './actions/booksActions';
 
// STEP 1 CREATE THE STROE
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

//store.subscribe(function(){
//    console.log('current state is: ' , store.getState( ));
//})

//STEP 2 CREATE AND DISPATCH ACTIONS
store.dispatch(postBooks([
    {
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 33.33
    },
    {
        id: 2,
        title: 'this is the second book title',
        description: 'this is the second book description',
        price: 50.99
    }]
))
    
// DELETE A BOOK
store.dispatch(deleteBooks({id:1}))

// UPDATE A BOOK
store.dispatch(updateBooks({
    id:2,
    title: 'learn react in 24hr'
}))
    
// CART ACTIONS
// ADD TO CART
store.dispatch(addToCart([{id: 1}]))