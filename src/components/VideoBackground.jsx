import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

// fetch trailer here and show it
const VideoBackground = ({ movie_id }) => {
    const trailer_key = useSelector(state => state?.movies?.movieTrailer?.key);

    useMovieTrailer(movie_id);
  
  return (
    <div className="w-screen absolute top-24 h-screen sm:top-0 z-8">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer_key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
