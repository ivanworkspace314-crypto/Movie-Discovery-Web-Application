import { tmdbRequest,mapMovie } from "./moviesService";

export async function fetchPopularMovies(page = 1, year) {
  const params = {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: String(page),
    sort_by: 'popularity.desc'
  };
  if (year) {
    params.primary_release_year = String(year);
  }
  const data = await tmdbRequest('/discover/movie', params);
  return (data.results || []).map(mapMovie);
}
