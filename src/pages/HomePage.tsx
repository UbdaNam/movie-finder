import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import apiClient from '../services/api-client';
import SearchMovie from '../components/SearchMovie';
import { CanceledError } from 'axios';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await apiClient.get(
          `/search/movie?query=${searchTerm}`,
          { signal: controller.signal }
        );
        setMovies(data.results);
        setError('');
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError('Error fetching movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [searchTerm]);

  if (error) {
    return <p className='text-danger'>{error}</p>;
  }

  return (
    <>
      <div className='mb-3'>
        <SearchMovie onSearch={(searchTerm) => setSearchTerm(searchTerm)} />
      </div>
      <div>
        {loading && (
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        )}
        {!loading && <MovieList movies={movies} />}
      </div>
    </>
  );
};

export default HomePage;
