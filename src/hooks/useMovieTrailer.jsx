import { useDispatch } from "react-redux"; 
import { addMovieTrailer } from "../redux/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();
  // fetch first movie trailer
  const getMovieVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    );
    const videosData = await res.json();
    const filteredTrailers = videosData.results.filter(
      (item) => item.type === "Trailer"
    );
    // if no trailer found then use the first video obj from videosData and if movie has multiple trailers then use first one as trailer
    const trailerData =
      filteredTrailers.length === 0
        ? videosData.results[0]
        : filteredTrailers[0];
    // console.log(trailerData); // trailerData will contain a youtube video key
    dispatch(addMovieTrailer(trailerData)); // update store with the trailer
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer