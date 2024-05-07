import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import AIRecommendationPage from "./AIRecommendationPage";

const Browse = () => {
  // calling custom hooks which fetches movies
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const aiSearchSelected = useSelector((state) => state?.ai?.aiSearchSelected);

  return (
    <div>
      { aiSearchSelected ? (
        <>
        <AIRecommendationPage />
        </>
      ) : (
        <>
          <Header />
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
