<template>
  <div>
    <div>
      {{ info }}
    </div>
    <Scan />
    <NewFilm
      @snack-bar="snackBar"
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
  </div>
</template>

<script>
import axios from 'axios';
import NewFilm from './NewFilm.vue';
import Scan from './Scan.vue';
import Magazines from './Magazines.vue';

export default {
  components: {
    Scan,
    NewFilm,
    Magazines,
  },
  data() {
    return {
      snackbar: false,
      info: null,
    };
  },
  mounted() {
    axios
      .get('http://localhost:1234/movie/usersList')
      .then((usersList) => {
        this.info = usersList;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    snackBar() {
      this.snackbar = true;
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
