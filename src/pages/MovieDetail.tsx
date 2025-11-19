import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate es para el botón "Volver"
import { getMovieById } from "@/services/movieService";
import type { Movie } from "@/types/movie";
import { Star, Calendar, ArrowLeft } from "lucide-react";
import { Heart } from "lucide-react";
import { useFavorites } from "@/context/FavoriteContext";

export const MovieDetail = () => {
  const { id } = useParams(); // Obtenemos el ID de la URL (ej: /movie/550)
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) return <div className="text-center py-20">Cargando...</div>;
  if (!movie)
    return <div className="text-center py-20">Película no encontrada</div>;

  const isAlreadyFavorite = isFavorite(movie.id);

  // Función que maneja el clic
  const handleToggleFavorite = () => {
    if (isAlreadyFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  // URL de la imagen de fondo (Backdrop) de alta calidad
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="relative min-h-screen">
      {/* 1. IMAGEN DE FONDO (HERO) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-20"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      />

      {/* Gradiente para suavizar el fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-gray-950 dark:via-gray-950/80" />

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="relative container mx-auto px-4 py-10">
        <button
          onClick={() => navigate(-1)} // Vuelve atrás en el historial
          className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={20} /> Volver
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Póster */}
          <div className="flex-shrink-0 mx-auto md:mx-0 w-64 shadow-2xl rounded-lg overflow-hidden">
            <img src={posterUrl} alt={movie.title} className="w-full h-auto" />
          </div>

          {/* Textos */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {movie.title}
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={18} />
                <span>{new Date(movie.release_date).getFullYear()}</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="text-gray-700 dark:text-gray-200 font-bold">
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <button
                onClick={handleToggleFavorite}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  isAlreadyFavorite
                    ? 'bg-red-600 text-white hover:bg-red-700' // Estilo si YA es favorita
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300' // Estilo normal
                }`}
              >
                <Heart 
                  size={20} 
                  fill={isAlreadyFavorite ? "currentColor" : "none"} // Relleno sólido si es favorita
                />
                {isAlreadyFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
              </button>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              {movie.overview}
            </p>

            {/* Aquí pondremos el botón de Favoritos más adelante */}
          </div>
        </div>
      </div>
    </div>
  );
};
