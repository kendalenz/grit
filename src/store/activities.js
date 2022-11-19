import axios from 'axios';

const activities = (state = [], action) => {
    if (action.type === 'SET_ACTIVITIES') {
      return action.activities;
    }
    // if (action.type === 'UPDATE_BOOK') {
    //   state = state.map((book) =>
    //     book.id === action.book.id ? action.book : book
    //   );
    // }
    if (action.type === 'CREATE_ACTIVITY') {
      state = [...state, action.activity];
    }
    // if (action.type === 'DELETE_BOOK') {
    //   state = state.filter((book) => book.id !== action.book.id);
    // }
    return state;
  };
  
  export const fetchActivites = () => {
    return async (dispatch) => {
      const response = await axios.get('/api/activities');
      dispatch({ type: 'SET_ACTIVITIES', activities: response.data });
    };
  };
  
//   export const editBook = (book, navigate) => {
//     return async (dispatch) => {
//       const response = await axios.put(`/api/books/${book.id}`, book);
//       dispatch({ type: 'UPDATE_BOOK', book: response.data });
//       navigate(`/books/${response.data.id}`);
//     };
//   };
  
  export const createActivity = (activity, navigate) => {
    return async (dispatch) => {
      const response = await axios.post('/api/activities', activity);
      dispatch({ type: 'CREATE_ACTIVITY', activity: response.data });
      navigate('/');
    };
  };
  
//   export const deleteBook = (book, navigate) => {
//     return async (dispatch) => {
//       await axios.delete(`/api/books/${book.id}`);
//       dispatch({ type: 'DELETE_BOOK', book });
//       navigate('/books');
//     };
//   };
  
  export default activities;
