import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import CreateActivity from './CreateActivity';
import Activities from './Activities';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchActivities, logout } from '../store';
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
      {/* <h1 id='grit_nav'>GRIT</h1> */}
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <div id='grit-nav'>
                <Link to="/">
                  <h1 id='grit-logo'>GRIT</h1>
                </Link>
              </div>
              <div id='nav-links'>
              <Link to='/'>Dashboard</Link>
              <Link to='/createactivity'>Add manual entry</Link>
              <Link to="#" onClick={() => dispatch(logout())}>
                Logout
              </Link>
              </div>
            </nav>
            <Routes>
              <Route path='/' element={<Activities />}></Route>
              <Route path='/createactivity' element={<CreateActivity />} />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
