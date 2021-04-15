/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { addNewUser } from '../actions/actionCreator';

const Registration = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUser(name, email, password));
  };

  return (
    <div>
      <h2 className="mt-5">SIGN UP</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-3 p-1 border border-gray-300 text-gray-500"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ml-3 p-1 border border-gray-300 text-gray-500"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="name">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ml-3 p-1 border border-gray-300 text-gray-500"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

Registration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Registration;
