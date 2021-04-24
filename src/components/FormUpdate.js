/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import history from '../history';
import Button from './Button';

const FormUpdate = ({
  car,
  carName,
  carPrice,
  carDescription,
  handleUpdate,
  handleSubmitPicture,
  setCarName,
  setCarPrice,
  setCarDescription,
  setUrl,
  url,
}) => (
  <div>
    <div className="car-form-wrapper mt-5">
      <h2>UPDATE CAR</h2>

      <form onSubmit={handleUpdate}>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            className="ml-3 p-1 border border-gray-300 text-gray-500"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="name">price</label>
          <input
            type="text"
            id="email"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            className="ml-3 p-1 border border-gray-300 text-gray-500"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="name">Description</label>
          <textarea
            type="text"
            id="password"
            value={carDescription}
            onChange={(e) => setCarDescription(e.target.value)}
            className="ml-3 p-1 border border-gray-300 text-gray-500"
          />
        </div>
        <button type="submit">Update Car</button>
      </form>
    </div>

    <div className="pictures-wrapper">
      <h2 className="my-2">ADD PICTURES</h2>

      <div className="picture-form">
        <div
          className="picture-preview"
          style={{
            width: '250px',
            height: '200px',
            border: '1px solid #ccc',
          }}
        >
          <img src={url} alt="preview" width="250" height="200" />
        </div>

        <form onSubmit={handleSubmitPicture}>
          <label htmlFor="url">Insert an url</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mx-3 p-1 border border-gray-300 text-gray-500"
          />
          <button type="submit">Add picture</button>
        </form>
      </div>
    </div>

    <div className="car-pictures-wrapper">
      <h1 className="my-2">CAR PICTURES</h1>
      <div className="pictures my-5 flex">
        {car.pictures?.map((pic) => (
          <img
            key={pic.id}
            src={pic.url}
            alt="preview"
            width="250"
            height="200"
            className="border border-gray-300"
          />
        ))}
      </div>
    </div>
    <Button name="Cancel" action={() => history.goBack()} />
  </div>
);

FormUpdate.propTypes = {
  url: PropTypes.string.isRequired,
  carName: PropTypes.string.isRequired,
  carDescription: PropTypes.string.isRequired,
  carPrice: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  setCarName: PropTypes.func.isRequired,
  setCarPrice: PropTypes.func.isRequired,
  setCarDescription: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleSubmitPicture: PropTypes.func.isRequired,
  car: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default FormUpdate;
