"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

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

import BooksList from './components/pages/booksList';

render(
    <Provider store={store} >
    <BooksList />
    </Provider>, document.getElementById('app')
)


//STEP 2 CREATE AND DISPATCH ACTIONS
//store.dispatch(postBooks(
//))
/*   
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
*/