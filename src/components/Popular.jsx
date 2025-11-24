import React, { useState, useEffect } from 'react'
import movieSample from '../assets/images/movieSample.png'
import MovieCard from './MovieCard'
import { fetchPopularMovies, searchMovies } from '../services/moviesService'
import useDebounce from '../hooks/useDebounce'

const Popular = ({ searchBarInput,year }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const debouncedQuery = useDebounce((searchBarInput || '').trim(), 500)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        if (debouncedQuery) {
          const results = await searchMovies(debouncedQuery)
          setMovies(results)
        } else {
          const formattedMovies = await fetchPopularMovies(1, year)
          setMovies(formattedMovies)
        }
      } catch (err) {
        setError(err.message)
        console.error('Error fetching movies:', err)
        setMovies(Array(8).fill(null).map((_, index) => ({
          id: index + 1,
          title: 'Antman',
          image: movieSample,
          type: 'Action',
          rating: 4.6
        })))
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [debouncedQuery, year])

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8" >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">Popular</h2>
        
        {loading && (
          <div className="text-white text-center py-8">Loading movies...</div>
        )}
        
        {error && (
          <div className="text-red-500 text-center py-8">
            Error: {error}. Showing dummy data.
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              src={movie.image} 
              alt={movie.title}
              title={movie.title}
              movieType={movie.type}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular
