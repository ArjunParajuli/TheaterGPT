import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleShowTrailerMovieDetails } from '../redux/moviesSlice';
const MovieDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    let nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);
    let eachMovieDetails = useSelector((state) => state.movies?.eachMovieDetails);
    const showTrailerMovieDetails = useSelector(state => state?.movies?.showTrailerMovieDetails);

        if(showTrailerMovieDetails){
            eachMovieDetails = nowPlayingMovies[0]
        }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full mx-4 bg-white rounded-lg overflow-hidden shadow-xl">
                <img className="w-[400px] h-[700px] mx-auto" src={`https://image.tmdb.org/t/p/w500${eachMovieDetails?.poster_path}`} alt={eachMovieDetails?.title} />
                <div className="p-6">
                    <h2 className="text-3xl font-semibold mb-4">{eachMovieDetails?.title}</h2>
                    <p className="text-gray-600 mb-4">Release Date: {eachMovieDetails?.release_date}</p>
                    <p className="text-gray-700 mb-4 opacity-60">{eachMovieDetails?.overview}</p>
                    <p className="text-gray-700 mb-4 opacity-60">Average Rating: {eachMovieDetails?.vote_average}</p>
                    <p className="text-gray-700 mb-4 opacity-60">Rating Count: {eachMovieDetails?.vote_count}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" 
                    onClick={() => 
                    {
                        dispatch(toggleShowTrailerMovieDetails(false))
                        navigate(-1)
                    }
                    }>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
