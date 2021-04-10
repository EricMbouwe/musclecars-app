import { useParams } from 'react-router';

const Car = () => {
  const { id } = useParams;

  return (
    <div>
      <h2>
        The car details of car n-
        {id}
      </h2>
    </div>
  );
};

export default Car;
