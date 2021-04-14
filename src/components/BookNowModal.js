import Button from './Button';

const BookNowModal = (props) => {
  console.log(props);

  return (
    <div className="book-now-modal">
      <button type="button">Cancel</button>
      <Button name="Book now" action={() => alert('booked')} />
    </div>
  );
};

export default BookNowModal;
