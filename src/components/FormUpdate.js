/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

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
    <div className="car-form-wrapper">
      <h2>UPDATE CAR</h2>

      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">price</label>
          <input
            type="text"
            id="email"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Description</label>
          <textarea
            type="text"
            id="password"
            value={carDescription}
            onChange={(e) => setCarDescription(e.target.value)}
          />
        </div>
        <button type="submit">Update Car</button>
      </form>
    </div>

    <div className="pictures-wrapper">
      <h2>ADD PICTURES</h2>

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
          />
          <button type="submit">Add picture</button>
        </form>
      </div>
    </div>

    <div className="car-pictures">
      {car.pictures?.map((pic) => (
        <img
          key={pic.id}
          src={pic.url}
          alt="preview"
          style={{
            width: '250px',
            height: '200px',
            border: '1px solid #ccc',
          }}
        />
      ))}
    </div>
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
