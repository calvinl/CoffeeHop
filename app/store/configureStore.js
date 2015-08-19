import { createStore } from 'redux';
import { searchApp } from '../reducers/search';

// optional second argument in createStore(reducer, state).
// this allows you to hydrate the app with state from the server.
let store = createStore(searchApp);
