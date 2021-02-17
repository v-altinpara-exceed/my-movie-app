import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/* eslint-disable no-unused-vars */
export default new Vuex.Store({
  state() {
    return {
      movies: [],
      movieID: 0,
      movieIDFlag: true,
      options: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller'],
    };
  },

  mutations: {
    increment(state, movie) {
      const {
        nameMovie, descriptionMovie, genreMovie, posterMovie, movieMovie,
      } = movie;
      state.movies.push({
        id: state.movies.length ? (state.movies[state.movies.length - 1].id + 1) : 0,
        nameMovie,
        descriptionMovie,
        genreMovie,
        posterMovie,
        movieMovie,
      });
    },
    startMovie(state, id) {
      state.movieID = id;
      state.movieIDFlag = false;
    },

    redactMovie(state, movie) {
      const namMovie = state.movies.findIndex((item) => item.id === movie.id);

      state.movies[namMovie].nameMovie = movie.nameMovie;
      state.movies[namMovie].descriptionMovie = movie.descriptionMovie;
      state.movies[namMovie].genreMovie = movie.genreMovie;
      state.movies[namMovie].posterMovie = movie.posterMovie;
      state.movies[namMovie].movieMovie = movie.movieMovie;
    },

    deleteMovie(state, movies) {
      state.movies = movies;
    },
  },
  strict: true,
});
/* eslint-disable no-unused-vars */
