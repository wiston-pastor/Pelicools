import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Movie } from '@/types/movie';

interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  // 1. Inicializar estado leyendo del LocalStorage (si existe)
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem('my-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Guardar en LocalStorage cada vez que cambie la lista
  useEffect(() => {
    localStorage.setItem('my-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Funciones para modificar el estado
  const addFavorite = (movie: Movie) => {
    // Evitamos duplicados verificando si ya existe
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((movie) => movie.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
  return context;
};