import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import sports from './sports';

const reducer = combineReducers({
  auth,
  sports
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
export * from './sports';
