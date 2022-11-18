import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Manual from './Manual';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken } from '../store';
import { Link, Routes, Route } from 'react-router-dom';


const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
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
              <Link to='/manual'>Add manual entry</Link>
              </div>
            </nav>
            <Routes>
              {/* <Route path='/' element={<Home />} /> */}
              <Route path='/manual' element={<Manual />} />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
