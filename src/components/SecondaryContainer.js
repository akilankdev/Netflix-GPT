import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log(movies);
  return (
    <div className=''>
      <MovieList title="Now Playing" movies={movies}/>
    </div>
  )
}

export default SecondaryContainer