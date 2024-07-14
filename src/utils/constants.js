export const API_KEY = '15960759f344a65d2a6e80905047ecd1';

// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTk2MDc1OWYzNDRhNjVkMmE2ZTgwOTA1MDQ3ZWNkMSIsInN1YiI6IjY1ZTg2OGM1YTZjMTA0MDE4N2U5ZWI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZRzT2VWuBib_EsfVegAbIHGiCFsc-dOW3TIZrMDxJI8

// this should be passed when making an API call
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTk2MDc1OWYzNDRhNjVkMmE2ZTgwOTA1MDQ3ZWNkMSIsInN1YiI6IjY1ZTg2OGM1YTZjMTA0MDE4N2U5ZWI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZRzT2VWuBib_EsfVegAbIHGiCFsc-dOW3TIZrMDxJI8'
  }
};

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTk2MDc1OWYzNDRhNjVkMmE2ZTgwOTA1MDQ3ZWNkMSIsInN1YiI6IjY1ZTg2OGM1YTZjMTA0MDE4N2U5ZWI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZRzT2VWuBib_EsfVegAbIHGiCFsc-dOW3TIZrMDxJI8

// image cdn url
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const LANG_OPTIONS = [
  {
    identifier: 'en',
    name: "English"
  },
  {
    identifier: 'hi',
    name: "Hindi"
  },
  {
    identifier: 'es',
    name: "Spanish"
  },
  {
    identifier: 'ge',
    name: "German"
  }
]

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;