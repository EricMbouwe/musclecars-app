/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/actionCreator';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <div className="container mx-auto">
      <h2 className="mt-5">SIGN IN</h2>

      <form
        onSubmit={handleSubmit}
        className="text-left p-8 border shadow-sm md:max-w-md mx-auto my-4 rounded-md"
      >
        <div className="form-group mt-3 flex flex-col">
          <label htmlFor="name" className="">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 border border-gray-300 text-gray-500 focus:ring-green-200"
          />
        </div>
        <div className="form-group my-3 flex flex-col">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-1 border border-gray-300 text-gray-500 focus:ring-green-200"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-100 text-base font-medium text-gray-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
        >
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
