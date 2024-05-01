import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice.js";

// this custom hook fetches & puts all the movie data inside the movie slice

const usePopularMovies = () => {
  const dispatch = useDispatch();

  // fetching the tmdb movies data and updating the store with this data
  const getPopularMovies = async() => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_OPTIONS)
    const jsonRes = await response.json();
    // console.log(jsonRes.results)
    dispatch(addPopularMovies(jsonRes.results))
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
