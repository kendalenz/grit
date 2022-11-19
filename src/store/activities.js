import axios from 'axios';

const activities = (state = [], action) => {
    if (action.type === 'SET_ACTIVITIES') {
      return action.activities;
    }
    if (action.type === 'CREATE_ACTIVITY') {
      state = [...state, action.activity];
    }
    return state;
  };
  
  export const fetchActivities = () => {
    return async (dispatch) => {
      const response = await axios.get('/api/activities');
      dispatch({ type: 'SET_ACTIVITIES', activities: response.data });
    };
  };
  
  export const createActivity = (activity, navigate) => {
    return async (dispatch) => {
      const response = await axios.post('/api/activities', activity);
      dispatch({ type: 'CREATE_ACTIVITY', activity: response.data });
      navigate('/');
    };
  };
  
  export default activities;
