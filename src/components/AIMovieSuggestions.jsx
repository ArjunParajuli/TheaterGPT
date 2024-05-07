import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const AIMovieSuggestions = () => {
  const { recommendedMovieNames, recommendedMovieDetails } = useSelector(
    (state) => state?.ai
  );
  if (!recommendedMovieNames || !recommendedMovieDetails) return;

  console.log(recommendedMovieDetails);

  return (
    <div className="mt-36">
      {recommendedMovieNames.map((name, index) => {
        return <MovieList key={name} title={name} movies={recommendedMovieDetails[index]} />;
      })}
    </div>
  );
};

export default AIMovieSuggestions;
