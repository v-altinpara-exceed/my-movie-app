<template>
  <div>
    <Scan />
    <NewFilm />
    <Magazines />
  </div>
</template>

<script>
import NewFilm from './NewFilm.vue';
import Scan from './Scan.vue';
import Magazines from './Magazines.vue';

export default {
  components: {
    Scan,
    NewFilm,
    Magazines,
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
