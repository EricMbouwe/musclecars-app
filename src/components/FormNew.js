/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

const FormNew = ({
  handleSubmit,
  name,
  price,
  description,
  setName,
  setPrice,
  setDescription,
}) => (
  <div className="car-form-wrapper">
    <h2>ADD A NEW CAR</h2>

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
        <label htmlFor="name">price</label>
        <input
          type="text"
          id="email"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Description</label>
        <textarea
          type="text"
          id="password"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Car</button>
    </form>
  </div>
);

FormNew.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormNew;
