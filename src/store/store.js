import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/* eslint-disable no-unused-vars */
export default new Vuex.Store({
  state: function(){
    return {  
      movies:[],
      options: ["Action","Comedy","Drama","Fantasy","Horror","Mystery","Romance","Thriller"],
    }
  },
  
  mutations: {
    increment (state, movie) {
      let {nameMovie, descriptionMovie, genreMovie, posterMovie, movieMovie} = movie
      state.movies.push({
        id: state.movies.length ? (state.movies[state.movies.length - 1].id+1) : 0,
        nameMovie,
        descriptionMovie,
        genreMovie,
        posterMovie,
        movieMovie,
      })
    },
  },
  strict: true,
})   
  /* eslint-disable no-unused-vars */