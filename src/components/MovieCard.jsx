import React from 'react';
import { IMG_CDN } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addEachMovieDetails } from '../redux/moviesSlice';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {

    const srcImg = IMG_CDN + movie?.poster_path
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickHandler = () =>{
      dispatch(addEachMovieDetails(movie))
      navigate('/movieDetails')
    }

    return(
      <>
     { movie?.poster_path &&
    <div className=' hover:scale-125 transition-transform duration-300'>
        <img src={srcImg} alt="movie poster" onClick={clickHandler} />
    </div>
     }
     </>
  )
}

export default MovieCard