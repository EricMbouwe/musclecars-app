/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

const BookNowForm = ({
  userName,
  carName,
  city,
  date,
  setUserName,
  setCarName,
  setCity,
  setDate,
}) => (
  <div className="booking-form-wrapper mt-5">
    <form>
      <div className="form-group text-sm text-gray-500">
        <label htmlFor="name">User Name</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="ml-3 p-1 border border-gray-300"
        />
      </div>
      <div className="form-group mt-3 text-sm text-gray-500">
        <label htmlFor="name">Car Name</label>
        <input
          type="text"
          id="carName"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          className="ml-3 p-1 border border-gray-300"
        />
      </div>
      <div className="form-group mt-3 text-sm text-gray-500">
        <label htmlFor="name">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="ml-3 p-1 border border-gray-300"
        />
      </div>
      <div className="form-group mt-3 text-sm text-gray-500">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="ml-3 p-1 border border-gray-300"
        />
      </div>
    </form>
  </div>
);

BookNowForm.propTypes = {
  userName: PropTypes.string.isRequired,
  carName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  setCarName: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default BookNowForm;
