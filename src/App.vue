<template>
  <v-app> 
    <form v-on:submit.prevent='scanMovies'>
      <input
        v-model='scanMovie'
        id='scan-movie'
        placeholder='Scan movie'
      >
      <button>scan</button>
    </form>
    <NewFilm/>
  </v-app>
</template>

<script>

import NewFilm from './components/NewFilm'

export default {
  name: 'App',
  
  data:function(){
    return {
      scanMovie: '',
    }
  },

  components: {
    NewFilm
  },

  methods:{   
    scanMovies(){
      console.log(this.scanMovie)
      this.scanMovie=''
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