import PropTypes from 'prop-types';

const Button = ({ name, dispatch, action }) => (
  <button type="button" onClick={() => dispatch(action)}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
