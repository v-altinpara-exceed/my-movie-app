<template>
    <div  >
      <Scan/>
      <NewFilm/>
      <Magazines/>
    </div>
</template>

<script>

import NewFilm from './NewFilm'
import Scan from './Scan'
import Magazines from './Magazines'

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
