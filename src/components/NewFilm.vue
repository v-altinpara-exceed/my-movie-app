<template>
  <div style="text-align: start;">
    <div v-show="!movieCreationWindow">
      <button @click="() => movieCreationWindow = true">
        Add movie
      </button>
    </div>
    <div v-show="movieCreationWindow">
      <CreateRedactMovie
        :movie="movie"
        @redact-movie="redactMovie"
      />
      <button @click="close">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import store from '../store/store';
import CreateRedactMovie from './CreateRedactMovie.vue';

export default {
  components: {
    CreateRedactMovie,
  },
  data() {
    return {
      movieCreationWindow: false,
      movie: {
        nameMovie: '',
        descriptionMovie: '',
        genreMovie: '',
        posterMovie: null,
        movieMovie: null,
      },
      options: store.state.options,
    };
  },

  store,

  methods: {
    redactMovie(movie) {
      this.movieCreationWindow = false;
      store.commit('increment', movie);
      this.movie.nameMovie = '';
      this.movie.descriptionMovie = '';
      this.movie.genreMovie = '';
      this.movie.posterMovie = null;
      this.movie.movieMovie = null;
    },

    close() {
      this.movieCreationWindow = false;
      this.movie.nameMovie = '';
      this.movie.descriptionMovie = '';
      this.movie.genreMovie = '';
      this.movie.posterMovie = null;
      this.movie.movieMovie = null;
    },
  },
};
</script>

<style>
.createMovie {
    height: 178px;
    display: table-caption;
    text-align: start;
}
</style>
