import axios from 'axios';

const distance = (state = [], action) => {
    if (action.type === 'SET_BOOKS') {
      return action.books;
    }
    return state;
  };

export default distance;