import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div>
      {/* Initially movies is null,It will give ERROR so thats why below condition is used */}
      {movies && <MovieList title="Now Playing" movies={movies}/>}
      
    </div>
  )
}

export default SecondaryContainer