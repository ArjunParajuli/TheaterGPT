import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    movies &&
    <div className='-mt-14 relative z-30 px-8'>
      <h1 className='text-white font-bold text-2xl mx-auto mt-[40px] mb-5'>{title}</h1>
      <div className='overflow-x-scroll overflow-y-hidden w-screen scrollbar-hidden '> {/* Remove flex and gap-5 */}
        <div className="flex gap-5" style={{width: `${movies.length * 170}px`}}> {/* Set the width of the container based on the number of cards */}
          {
            movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList