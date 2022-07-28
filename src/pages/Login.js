import React, { useEffect, useState } from 'react';
import useFormController from '../hooks/useFormController';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  }
  const [input, updateState] = useFormController(initialState);
  const [isValid, setValid] = useState(false);
  useEffect(() => {
    const validateForm = () => {
      const valEmail = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i;
      if (input.password.length > 6 && input.email.match(valEmail)) {
        setValid(true);
      } else if (isValid) {
        setValid(false);
      }
    }
    validateForm();
  }, [input, isValid]);
  return (
    <div id="loginForm">
      <h1>Login</h1>
      <label>
        Email
        {' '}
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={ input.email }
          onChange={ updateState }
        />
      </label>
      <label>
        Password
        {' '}
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={ input.password }
          onChange={ updateState }
        />
      </label>
      <button
        type='button'
        disabled={ !isValid }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
