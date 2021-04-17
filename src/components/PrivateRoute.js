/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({
  children,
  isAuthenticated,
  privatePath,
  exact,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated === true ? (
        children
      ) : (
        <Redirect to={privatePath === 'L' ? '/login' : '/admin'} />
      ))}
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  privatePath: PropTypes.string.isRequired,
  exact: PropTypes.string.isRequired,
};
