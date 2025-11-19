// Fíjate que dice "export interface", NO solo "interface"
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

// AQUÍ ES DONDE TE ESTÁ DANDO EL ERROR
export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}