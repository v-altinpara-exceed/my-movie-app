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
      svapNam: 0,
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
      console.log(state.movies);
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
    upOptions(state, option) {
      let svapflag = true;
      const svapNam1 = state.options.indexOf(option);
      state.svapNam = state.options.indexOf(option);
      while (svapflag) {
        if (!state.svapNam) {
          svapflag = false;
        } else {
          state.svapNam -= 1;
          // eslint-disable-next-line max-len
          if ((state.movies.filter((t) => t.genreMovie === state.options[state.svapNam]).length) > 0) {
            // eslint-disable-next-line max-len
            [state.options[svapNam1], state.options[state.svapNam]] = [state.options[state.svapNam], state.options[svapNam1]];
            svapflag = false;
          }
        }
      }
    },
    downOptions(state, option) {
      let svapflag = true;
      const svapNam1 = state.options.indexOf(option);
      state.svapNam = state.options.indexOf(option);
      while (svapflag) {
        if (state.svapNam >= state.options.length) {
          svapflag = false;
        } else {
          state.svapNam += 1;
          // eslint-disable-next-line max-len
          if ((state.movies.filter((t) => t.genreMovie === state.options[state.svapNam]).length) > 0) {
            // eslint-disable-next-line max-len
            [state.options[svapNam1], state.options[state.svapNam]] = [state.options[state.svapNam], state.options[svapNam1]];
            svapflag = false;
          }
        }
      }
    },
  },
  strict: true,
});
/* eslint-disable no-unused-vars */
