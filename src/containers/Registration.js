/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { receivedNewUserData } from '../actions/actionCreator';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    axios
      .post(
        'http://localhost:3000/api/v1/users',
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
        console.log(isPending);

        if (response.data.status === 'created') {
          history.push('/');
          // history.go(-1);
          // dispatch action to change the app loggedInstatus and user data
          dispatch(receivedNewUserData(response));
        } else {
          setErrors('Something went wrong');
        }
      })
      .catch((error) => console.log('Regsitration Errors', error.message));
  };

  return (
    <div>
      <h2>Hey sign up</h2>
      <div>{errors && <h2>{errors}</h2>}</div>

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
    </div>
  );
};

export default Registration;
