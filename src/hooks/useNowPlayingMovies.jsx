import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants.js'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../redux/moviesSlice.js';

// this custom hook fetches & puts all the movie data inside the movie slice

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((state) => state?.movies?.nowPlayingMovies);

    const dispatch = useDispatch();

    // fetching the tmdb movies data and updating the store with this data
    const getNowPlayingMovies = async() =>{
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const jsonFormat = await res.json();
      dispatch(addNowPlayingMovies(jsonFormat.results))
    }
    
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies()
    }, [])
 
}

export default useNowPlayingMovies

