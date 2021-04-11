/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useState } from 'react';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:3001/users',
        {
          name,
          email,
          password,
        },
        { withCredentials: true },
      )
      .then((response) => {
        console.log('user is', response.data);
      })
      .catch((error) => console.log('regsitration errors', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={() => setName(name)} />
        </div>

        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={() => setEmail(email)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={() => setPassword(password)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
