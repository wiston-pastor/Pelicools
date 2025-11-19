import api from './api';
import type { MovieResponse } from '@/types/movie';

export const getPopularMovies = async (): Promise<MovieResponse> => {
  const { data } = await api.get<MovieResponse>('/movie/popular');
  return data;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const { data } = await api.get<Movie>(`/movie/${id}`);
  return data;
};

export const searchMovies = async (query: string): Promise<MovieResponse> => {
  const { data } = await api.get<MovieResponse>('/search/movie', {
    params: {
      query, // Axios se encarga de codificar el texto (ej: espacios a %20)
    },
  });
  return data;
};