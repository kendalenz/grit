import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';

const Login = ()=> {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = ev => {
    setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
  };

  const login = (ev)=> {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
  };
  return (
    <div id='login-page'>
      {/* <img src='../static/Grit_login_photo.jpeg'/> */}
      <h2>Login</h2>
      <form onSubmit={ login }>
        <input
          placeholder='Username'
          value = { credentials.username }
          name = 'username'
          onChange = { onChange }
          />
        <input
          placeholder='Password'
          name = 'password'
          value={ credentials.password }
          onChange = { onChange }
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
