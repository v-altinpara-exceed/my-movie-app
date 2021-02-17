<template>
  <div class="container">
    <div
      v-for="option in options.filter(e => moviegenre(e))"
      :key="option"
      class="row"
    >
      <v-sheet
        class="mx-auto"
        elevation="8"
        width="90%"
        draggable
      >
        <i class="fa fa-chevron-up" />
        <v-btn
          color="primary"
          text
          @click="$emit('up', option)"
        >
          UP
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="DOWN(option)"
        >
          DOWN
        </v-btn>
        <div class="mt-2 col col-12">
          {{ option }}
        </div>

        <v-slide-group
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(movie, key) in movies.filter(t => t.genreMovie === option)"
            :key="key"
          >
            <Genres
              :option="option"
              :movie="movie"
              @delete-movie="deleteMovie"
              @redact-movie="redactMovie"
            />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
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
      dragEvent: null,
      extendOriginal: null,
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
