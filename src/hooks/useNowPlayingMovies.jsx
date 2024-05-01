import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants.js'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../redux/moviesSlice.js';

// this custom hook fetches & puts all the movie data inside the movie slice

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    // fetching the tmdb movies data and updating the store with this data
    const getNowPlayingMovies = async() =>{
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const jsonFormat = await res.json();
      // console.log(jsonFormat.results)
      dispatch(addNowPlayingMovies(jsonFormat.results))
    }
    
    useEffect(()=>{
      getNowPlayingMovies()
    }, [])
 
}

export default useNowPlayingMovies

