import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  return <div>Movie {id}</div>;
};

export default MovieDetails;
