import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import CreateActivity from './CreateActivity';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchActivities } from '../store';
import { Link, Routes, Route } from 'react-router-dom';


const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchActivities());
  }, []);

  return (
    <div>
      <h1 id='grit_nav'>GRIT</h1>
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <div>
              <Link to='/createactivity'>Add manual entry</Link>
              </div>
            </nav>
            <Routes>
              <Route path='/createactivity' element={<CreateActivity />} />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
