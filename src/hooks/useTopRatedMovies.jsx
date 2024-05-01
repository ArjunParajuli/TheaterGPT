import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice.js";

// this custom hook fetches & puts all the movie data inside the movie slice

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  // fetching the tmdb movies data and updating the store with this data
  const getTopRatedMovies = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
    const jsonRes = await response.json();
    // console.log(jsonRes.results)
    dispatch(addTopRatedMovies(jsonRes.results))
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
