import axios from 'axios';

const sports = (state = [], action) => {
    if (action.type === 'SET_SPORTS') {
      return action.sports;
    }
    return state;
  };

  export const fetchSports = () => {
    return async (dispatch) => {
      const response = await axios.get('/api/sports');
      dispatch({ type: 'SET_SPORTS', sports: response.data });
    };
  };
  
export default sports;