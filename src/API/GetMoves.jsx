const axios = require('axios').default;
// https://api.themoviedb.org/3/movie/550?api_key=f632edb05cc91b97d9ccb27096819906

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const myKey = 'f632edb05cc91b97d9ccb27096819906';

export async function getSearchMovies(searchName) {
  const responce = await axios.get('search/movie', {
    params: {
      api_key: myKey,
      language: 'en-US',
      query: searchName,
      include_adult: true,
      safesearch: true,
      page: 1,
    },
  });
  const movies = await responce.data.results;
  return movies;
}

export async function getTrandMovies() {
  const responce = await axios.get('trending/movie/day', {
    params: {
      api_key: myKey,
    },
  });
  const movies = await responce.data.results;
  return movies;
}

export async function getMoviesBuId(movieId) {
  const responce = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: myKey,
    },
  });
  const movies = await responce.data;
  return movies;
}

export async function getMovieActorsBuId(movieId) {
  const responce = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: myKey,
    },
  });
  const movie = await responce.data.cast;
  return movie;
}

export async function getReview(movieId) {
  const responce = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: myKey,
    },
  });
  const movie = await responce.data.results;
  return movie;
}
