import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
 const movies = useSelector(state => state?.movies)

  return (
    <div className="absolute top-[700px] z-40 bg-black">
        <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer