import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/* eslint-disable no-unused-vars */
export default new Vuex.Store({
  state: function(){
    return {  
      movies:[{
        id: 0,
        nameMovie: 100,
        descriptionMovie: 1000,
      },]
    }
  },
  mutations: {
    increment (state) {
      state.movies.push({
        id: state.movies[state.movies.length - 1].id+1,
        nameMovie: state.movies[state.movies.length - 1].nameMovie+1,
        descriptionMovie: state.movies[state.movies.length - 1].descriptionMovie+1,
      })  
    },
  },
  strict: true,
})   
  /* eslint-disable no-unused-vars */