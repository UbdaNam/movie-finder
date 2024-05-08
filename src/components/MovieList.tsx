import { Movie } from '../pages/HomePage';

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {movies &&
        movies.map((movie) => (
          <div className='col' key={movie.id}>
            <div className='card'>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                className='card-img-top'
                alt={movie.title}
              />
              <div className='card-body'>
                <h5 className='card-title'>{movie.title}</h5>
                <p className='card-text'>
                  Release Date:{' '}
                  {new Date(movie.release_date).toLocaleDateString()}
                </p>
                <p className='card-text'>Rating:</p>
                {/* <p className='card-title'>{movie.title}</p> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieList;
