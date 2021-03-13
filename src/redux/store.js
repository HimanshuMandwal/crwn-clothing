import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; //this middleware is for logging the action and payload for our understanding this for visual


const store  = createStore(rootReducer,applyMiddleware(...middlewares));
//using spread here if there are multiple middlware they are spread as single entities

//applymiddleware is just a function able to take any numbe of middleware and process them all

export default store;
