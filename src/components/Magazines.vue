<template>
  <div class="container">
    <div
      v-for="option in options.filter(e => moviegenre(e))"
      :key="option"
      class="row"
      @mousedown="() => (mouseDownMovie=true)"
      @mouseup="() => (mouseDownMovie=false)"
      @mousemove="(el) => mouseMove(el.clientX,el.clientY)"
    >
      <div class="mt-2 col col-12">
        {{ option }}
      </div>
      <Genres
        v-for="(movie, key) in movies.filter(t => t.genreMovie === option)"
        :key="key"
        :option="option"
        :movie="movie"
        @delete-movie="deleteMovie"
        @redact-movie="redactMovie"
      />
      <hr
        align="center"
        width="95%"
        size="2"
        color="#2c3e50"
      >
    </div>
  </div>
</template>

<script>
import store from '../store/store';
import Genres from './Genres.vue';

export default {
  name: 'ImageUpload',

  store,
  components: {
    Genres,
  },

  data() {
    return {
      movies: store.state.movies,
      options: store.state.options,
      mouseDownMovie: false,
    };
  },
  methods: {
    moviegenre(option) {
      return ((this.movies.filter((t) => t.genreMovie === option)).length > 0);
    },

    deleteMovie(id) {
      this.movies = this.movies.filter((t) => t.id !== id);
      store.commit('deleteMovie', this.movies);
    },
    redactMovie(movie) {
      store.commit('redactMovie', movie);
    },
    mouseMove(clientX, clientY) {
      if (this.mouseDownMovie) {
        console.log(`${clientX}:${clientY}`);
      }
    },
  },
};
</script>

<style>
.container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
}

.v-application .mt-2 {
    margin-top: 8px !important;
}

.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
    font-size: 20pt
}
</style>
