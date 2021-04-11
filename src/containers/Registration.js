/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(true);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        'http://localhost:3001/api/v1/users',
        {
          name,
          email,
          password,
        },
        { withCredentials: true },
      )
      .then((response) => {
        console.log('user is', response.data);
        setIsPending(false);
        // history.go(-1);
        history.push('/');
      })
      .catch((error) => console.log('Regsitration Errors', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <button type="submit">Register</button>
      </form>
      {isPending && <span>Loading...</span>}
    </div>
  );
};

export default Registration;
