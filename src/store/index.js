import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import activities from './activities';
import users from './users';

const reducer = combineReducers({
  auth,
  activities,
  users
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
export * from './activities';
export * from './users';