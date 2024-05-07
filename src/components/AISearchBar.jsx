import React, { useRef } from "react";
import { LANG_OPTIONS } from "../utils/constants";
import { changeLanguage } from "../redux/langSlice";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGES } from "../utils/langConstants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addRecommendedMovies } from "../redux/aiSlice";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { toggleAISearchSelected } from "../redux/aiSlice";

const AISearchBar = () => {
  const dispatch = useDispatch();
  const langRef = useRef();
  const selectedLang = useSelector((state) => state?.lang?.language);
  const inpRef = useRef();



  // search the movie in tmdb
const searchMovieInTMDB = async(movie) =>{
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
  const json = await data.json();

  return json.results;
}


const handleSearch = async() => {
// generative ai obj
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt =
    "Act as a Movie Recommendation system and suggest some movies for the query: " +
    inpRef.current.value +
    ". Only give names of 5 movies comma separated like the example result given ahead. Example result: Movie1, Movie2, Movie3";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  // const text = response.text();
  
  const recommendedMovies = response?.candidates[0]?.content?.parts[0]?.text.split(', ');

  // search each of these recommended movies in the tmdb
  /* NOTE:
   the map func will immediately call searchMovieInTMDB func for all the movies & won't wait for single func call to finish
   the map func will return an array of promises, as the searchMovieInTMDB func is async func & takes time for making api calls & to return the results
  */

   if(!recommendedMovies) return;

   const movieDetailsArr = recommendedMovies.map((movie)=> searchMovieInTMDB(movie));
  // console.log(movieDetailsArr) // array of promises

   // Promise.all() takes array of promises & returns a promise only after all the input promises are resolved
   // so tmdbResults will contain all the movie details as it is assigned a value after all the promises are resolved 
   const tmdbResults = await Promise.all(movieDetailsArr)
  //  console.log(tmdbResults)

   // now push the recommended movies in redux store
  dispatch(addRecommendedMovies( { movieNames:recommendedMovies, movieDetails: tmdbResults } ));

}

run();
}

  return (
    <>
      <div className="flex justify-end px-8 mt-8 ">
        <select
          className="bg-gray-900 text-white rounded-md"
          ref={langRef}
          onChange={() => {
            dispatch(changeLanguage(langRef.current.value));
          }}
        >
          {LANG_OPTIONS.map((lang) => {
            return (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">
          {LANGUAGES[selectedLang].h1}
        </h1>
        <h2 className="text-2xl mb-8">{LANGUAGES[selectedLang].h2}</h2>

        <div className="flex flex-col sm:flex-row items-center">
          <input
            ref={inpRef}
            className="min-w-[320px] text-center opacity-60 bg-transparent border-b-2 border-white py-2 px-4 mr-4 mb-4 sm:mb-0 focus:outline-none focus:border-blue-500 placeholder-white"
            placeholder={LANGUAGES[selectedLang].inpTxt}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-lg text-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleSearch}
          >
            {LANGUAGES[selectedLang].search}
          </button>
        </div>

        <button onClick={() => dispatch(toggleAISearchSelected())}
      className="mt-6 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >Go Back</button>
      </div>
    </>
  );
};

export default AISearchBar;
