import axios from "axios";

const API_KEY = "37b2f265ef7f79cb361c34d8ffcab080";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGI1ODRiYTM0OTJmZTg2NGRkZjVlMmZlNWE3M2NiMiIsIm5iZiI6MTcyNzQzOTcwNS42NjAzNzgsInN1YiI6IjY2ZjUyODNiOWEzMTI4OWViNWVkNDAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LLIiAsnvdsCaK0-JJ7Kahu9lej17k-YNYMnfOX7fKO8",
  },
};
export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}`,
    options
  );
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`,
    options
  );

  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
    options
  );
  return data;
};

export const getMoviesCredits = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US&page=1&api_key=${API_KEY}`,
    options
  );
  return data.cast;
};

export const getMoviesReview = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
    options
  );
  return data.results;
};