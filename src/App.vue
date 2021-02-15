<template>
  <v-app>
    <Scan/>
    <NewFilm/>
    <Magazines/>
  </v-app>
</template>

<script>

import NewFilm from './components/NewFilm'
import Scan from './components/Scan'
import Magazines from './components/Magazines'

export default {
  name: 'App',

  components: {
    NewFilm,
    Scan,
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