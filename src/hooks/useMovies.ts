import { useState, useEffect } from 'react';
import { getPopularMovies } from '@/services/movieService';
import type { Movie } from '@/types/movie';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (err) {
        setError('Error al cargar las películas');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, isLoading, error };
};