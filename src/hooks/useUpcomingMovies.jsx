import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice.js";

// this custom hook fetches & puts all the movie data inside the movie slice

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector(state => state?.movies?.upcomingMovies);
  const dispatch = useDispatch();

  // fetching the tmdb movies data and updating the store with this data
  const getUpcomingMovies = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
    const jsonRes = await response.json();
    // console.log(jsonRes.results)
    dispatch(addUpcomingMovies(jsonRes.results))
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
