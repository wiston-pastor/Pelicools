import { useFavorites } from '@/context/FavoriteContext';
import { MovieCard } from '@/components/movies/MovieCard';
import { HeartOff } from 'lucide-react';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
        <span className="text-red-500">❤</span> Mis Favoritos
      </h2>

      {favorites.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <HeartOff size={64} className="mx-auto mb-4 opacity-50" />
          <p className="text-xl">Aún no tienes películas favoritas.</p>
          <p className="mt-2">Ve al inicio y agrega algunas.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};