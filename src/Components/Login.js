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
      <nav id='login-nav'>
        <h1 id='grit-logo'>GRIT</h1>
      </nav>
      <div id='login-info'>
      <div id='login'>
        <h2 id='login-heading'>Login</h2>
      </div>
      <form id='login-form' onSubmit={ login }>
        <input
          className='login-input'
          placeholder='Username'
          value = { credentials.username }
          name = 'username'
          onChange = { onChange }
          />
        <input
          className='login-input'
          placeholder='Password'
          name = 'password'
          value={ credentials.password }
          onChange = { onChange }
        />
        <button id='login-button'><strong>Login</strong></button>
      </form>
      </div>
    </div>
  );
};

export default Login;
