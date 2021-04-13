import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Button = ({ name, action }) => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(action)}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
