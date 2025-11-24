import genreData from '../utility/movieType';
import movieSample from '../assets/images/movieSample.png';
import { fetchPopularMovies } from './popularMovies.js';
import { searchMovies } from './searchMovies.js';
// Precomputed map reused by all functions
const genreMap = new Map(genreData.genres.map(g => [g.id, g.name]));

// Generic TMDB request helper
export async function tmdbRequest(endpoint, queryParams = {}) {
  const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
  const bearer = import.meta.env.VITE_TMDB_BEARER;
  if (!baseUrl || !bearer) throw new Error('Missing TMDB environment variables');

  const searchParams = new URLSearchParams(queryParams);
  const url = `${baseUrl}${endpoint}?${searchParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      Authorization: bearer,
      accept: 'application/json'
    }
  });
  if (!response.ok) throw new Error(`TMDB request failed: ${response.status}`);
  return response.json();
}

// Shared movie mapping
export function mapMovie(movie) {
  const genreNames = (movie.genre_ids || [])
    .map(id => genreMap.get(id))
    .filter(Boolean);
  return {
    id: movie.id,
    title: movie.title || movie.name || 'Untitled',
    image: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : movieSample,
    type: genreNames.slice(0, 3).length ? genreNames.slice(0, 3).join(', ') : 'Unknown',
    rating: movie.vote_average ?? 0
  };
}

export { fetchPopularMovies } from './popularMovies.js';
export { searchMovies } from './searchMovies.js';




