import { tmdbRequest,mapMovie } from "./moviesService";
export async function searchMovies(query, page = 1) {
  if (!query) return [];
  const data = await tmdbRequest('/search/movie', {
    query: query,
    include_adult: 'false',
    language: 'en-US',
    page: String(page)
  });
  return (data.results || []).map(mapMovie);
}