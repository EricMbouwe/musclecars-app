/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import history from '../history';
import Button from './Button';

const FormNew = ({
  handleSubmit,
  name,
  price,
  description,
  setName,
  setPrice,
  setDescription,
}) => (
  <div className="car-form-wrapper mt-5 container mx-auto">
    <h2>ADD A NEW CAR</h2>

    <form
      onSubmit={handleSubmit}
      className="text-left p-8 border shadow-sm md:max-w-md mx-auto my-4 rounded-md"
    >
      <div className="form-group mt-3 flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-1 border border-gray-300 text-gray-500 focus:ring-green-200"
        />
      </div>
      <div className="form-group mt-3 flex flex-col">
        <label htmlFor="name">price</label>
        <input
          type="text"
          id="email"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-1 border border-gray-300 text-gray-500 focus:ring-green-200"
        />
      </div>
      <div className="form-group my-3 flex flex-col">
        <label htmlFor="name">Description</label>
        <textarea
          type="text"
          id="password"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-1 border border-gray-300 text-gray-500 focus:ring-green-200"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-100 text-base font-medium text-gray-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
      >
        Add Car
      </button>
    </form>
    <Button
      name="Cancel"
      className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:w-auto sm:text-sm"
      action={() => history.goBack()}
    />
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
