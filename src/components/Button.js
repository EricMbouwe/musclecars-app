import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Button = ({ name, action, className }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(action)}
      className={className}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
