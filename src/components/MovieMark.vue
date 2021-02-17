<template>
  <div>
    <Scan />
    <NewFilm />
    <Magazines
      @up="UP"
    />
  </div>
</template>

<script>
import NewFilm from './NewFilm.vue';
import Scan from './Scan.vue';
import Magazines from './Magazines.vue';
import store from '../store/store';

export default {
  store,
  components: {
    Scan,
    NewFilm,
    Magazines,
  },
  methods: {
    UP(option) {
      store.commit('svapOptions', option);
    },
  },
};
</script>

<style lang="scss">
  #app {
    text-align: center;
    margin-top: 30px;
  }
</style>
