import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import CreateActivity from './CreateActivity';
import Activities from './Activities';
import CreateRoute from './CreateRoute';
import User from './User';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchActivities, fetchUsers, logout } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(auth);

  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchActivities());
    dispatch(fetchUsers());
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
              <Link to='/createroute'>Create route</Link>
              {/* <Link to={`/users/${auth.id}`}>Account</Link> */}
              <Link to="#" onClick={() => dispatch(logout())}>
                Logout
              </Link>
              </div>
            </nav>
            <Routes>
              <Route path='/' element={<Activities />}></Route>
              <Route path='/createactivity' element={<CreateActivity />} />
              <Route path='/createroute' element={<CreateRoute />} />
              <Route path='/users/:id' element={<User 
                profileImage={auth.profileImage}
                firstName={auth.firstName}
                lastName={auth.lastName}
              />} />
              {/* <Route path='/' element={<User />} /> */}

            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
