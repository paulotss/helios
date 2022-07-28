import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <main className="grid w-screen h-screen bg-green-100 place-content-center">
      <div className="rounded-xl flex flex-col p-8 w-96 shadow bg-white">
        <h1 className="font-satisfy text-center text-5xl mb-5 text-green-800">Helio</h1>
        <input
          className="rounded outline p-3 mb-5 bg-black focus:outline-green-800 text-white"
          type="email"
          name="email"
          id="email"
          value={ input.email }
          onChange={ updateState }
          placeholder="Email"
          />
        <input
          className="rounded outline p-3 mb-5 bg-black focus:outline-green-800 text-white"
          type="password"
          name="password"
          id="password"
          value={ input.password }
          onChange={ updateState }
          placeholder="Password"
        />
        <Link to="/turmas">
          <button
            className="bg-green-800 text-white w-full p-3 rounded disabled:bg-gray-500"
            type='button'
            disabled={ !isValid }
          >
            Entrar
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Login;
