/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { signIn } from '../actions/actionCreator';

const Login = ({ loggedInStatus, currentUser, dispatch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState('');
  // const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <div>
      <h2>Hey Sign In</h2>
      <h1>{loggedInStatus}</h1>
      {currentUser && <h1>{currentUser.name}</h1>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

Login.defaultProps = {
  loggedInStatus: 'NOT_LOGGED_IN',
  currentUser: {},
};

Login.propTypes = {
  loggedInStatus: PropTypes.string,
  currentUser: PropTypes.oneOfType([PropTypes.object]),
  dispatch: PropTypes.func.isRequired,
};

export default Login;
