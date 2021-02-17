<template>
  <div>
    <form
      class="createMovie"
      @submit.prevent="$emit('redact-movie', movies)"
    >
      <input
        v-model="movies.nameMovie"
        type="text"
        placeholder="nameMovie"
      >
      <input
        v-model="movies.descriptionMovie"
        type="text"
        placeholder="descriptionMovie"
      >
      <p>
        ADD genre:
        <select v-model="movies.genreMovie">
          <option
            v-for="(option, key) in options"
            :key="key"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </p>
      <input
        type="file"
        accept="image/jpeg"
        @change="uploadImage"
      >
      <input
        type="file"
        accept="video/mp4"
        @change="uploadVideo"
      >
      <button>
        OK
      </button>
    </form>
  </div>
</template>

<script>
import store from '../store/store';

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  store,
  data() {
    return {
      options: store.state.options,
      movies: {},
    };
  },
  mounted() {
    this.movies.id = this.movie.id;
    this.movies.nameMovie = this.movie.nameMovie;
    this.movies.descriptionMovie = this.movie.descriptionMovie;
    this.movies.genreMovie = this.movie.genreMovie;
    this.movies.posterMovie = this.movie.posterMovie;
    this.movies.movieMovie = this.movie.movieMovie;
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (el) => {
        this.movies.posterMovie = el.target.result;
      };
    },
    uploadVideo(e) {
      const video = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(video);
      reader.onload = (el) => {
        this.movies.movieMovie = el.target.result;
      };
    },
  },
};
</script>

<style>

</style>
