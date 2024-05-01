import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({movie}) => {

    const srcImg = IMG_CDN + movie?.poster_path

    return(
    <div className=' hover:scale-125 transition-transform duration-300'>
        <img src={srcImg} alt="movie poster" />
        {/* <h2 className='font-semibold text-lg mt-3'>{movie.original_title}</h2> */}
    </div>
  )
}

export default MovieCard