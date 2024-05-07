import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const nowPlayingMovies = useSelector(state => state?.movies?.nowPlayingMovies);

    // if the movies are not fetched yet then store will be empty and can't access the first movie, so return 
    if(!nowPlayingMovies) return;
    const firstMovie = nowPlayingMovies[0];

    // extract details of the first movie to be shown 
    const {original_title, overview, id} = firstMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movie_id={id} />
    </div>
  )
}

export default MainContainer