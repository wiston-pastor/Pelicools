import type { Movie } from '@/types/movie';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    // Cambiamos el div exterior por un Link
    <Link 
      to={`/movie/${movie.id}`} 
      className="block group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="aspect-[2/3] overflow-hidden">
         {/* ... imagen ... */}
          <img 
            src={imageUrl} 
            alt={movie.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
      </div>

      <div className="p-4">
        {/* ... título y estrellas ... (esto queda igual) */}
         <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate">
            {movie.title}
         </h3>
         <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
               {new Date(movie.release_date).getFullYear()}
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
         </div>
      </div>
    </Link>
  );
};