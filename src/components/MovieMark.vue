<template>
  <div>
    <v-progress-linear
      v-if="start"
      indeterminate
      color="cyan"
    />
    <div
      v-if="!start"
    >
      <Scan />
      <NewFilm
        @snack-bar="snackBar"
        @error-serv="errorServ"
      />
      <Magazines />
      <v-snackbar
        v-model="snackbar"
        absolute
        color="primary"
        right
        top
        text
      >
        Add new film
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
      <v-snackbar
        v-model="progress"
        absolute
        color="primary"
        right
        top
        text
      >
        Error
        <v-btn
          color="pink"
          text
          @click="progress = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import NewFilm from './NewFilm.vue';
import Scan from './Scan.vue';
import Magazines from './Magazines.vue';
import PostsService from '../services/PostsService';
import store from '../store/store';

export default {
  components: {
    Scan,
    NewFilm,
    Magazines,
  },
  store,
  data() {
    return {
      start: true,
      progress: false,
      snackbar: false,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.movies = response.data;
      store.commit('startpush', this.movies);
      this.start = false;
    },
    snackBar() {
      this.snackbar = true;
    },
    errorServ() {
      this.progress = true;
    },
  },
};
</script>

<style lang="scss">
  #app {
    text-align: center;
    margin-top: 30px;
  }
  .container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
