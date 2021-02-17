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
</style>
