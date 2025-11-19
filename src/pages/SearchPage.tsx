import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; // Hook clave
import { searchMovies } from '@/services/movieService';
import type { Movie } from '@/types/movie';
import { MovieCard } from '@/components/movies/MovieCard';

export const SearchPage = () => {
  // useSearchParams funciona parecido a useState
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // Leemos lo que viene después de ?q=

  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      
      try {
        setIsLoading(true);
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]); // <-- Se ejecuta cada vez que cambia la búsqueda en la URL

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Resultados para: <span className="text-blue-500">"{query}"</span>
      </h2>

      {isLoading ? (
        <div className="text-center py-10">Buscando...</div>
      ) : (
        <>
          {movies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-10">
              No encontramos películas con ese nombre.
            </div>
          )}
        </>
      )}
    </div>
  );
};