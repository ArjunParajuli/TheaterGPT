import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice.js";

// this custom hook fetches & puts all the movie data inside the movie slice

const useTopRatedMovies = () => {
  const topRatedmovies = useSelector(state => state?.movies?.topRatedmovies);
  const dispatch = useDispatch();

  // fetching the tmdb movies data and updating the store with this data
  const getTopRatedMovies = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
    const jsonRes = await response.json();
    // console.log(jsonRes.results)
    dispatch(addTopRatedMovies(jsonRes.results))
  };

  useEffect(() => {
    !topRatedmovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
