import { Movie } from '../pages/HomePage';

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <div className='row row-cols-1 row-cols-sm-3 row-cols-lg-5 g-4'>
      {movies &&
        movies.map((movie) => (
          <div className='col' key={movie.id}>
            <div className='card h-100'>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                className='card-img-top'
                style={{ objectFit: 'cover' }}
                alt={movie.title}
              />
              <div className='card-body d-flex'>
                <div className='mt-auto'>
                  <h5 className='card-title'>
                    {movie.title.length > 14
                      ? movie.title.slice(0, 14) + '...'
                      : movie.title}
                  </h5>
                  <p className='card-text'>
                    Release Date:{' '}
                    {new Date(movie.release_date).toLocaleDateString()}
                  </p>
                  <p className='card-text'>
                    Rating: {movie.vote_average.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieList;
