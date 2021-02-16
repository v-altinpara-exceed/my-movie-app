<template>
  <div>
        <router-link to="/MovieMark">MovieMark</router-link> 
        <h1>{{this.$route.query.movie.nameMovie}}</h1>
        <h2>Genre: {{this.$route.query.movie.genreMovie}}</h2>
        <video
          width="90%"
          controls
        >
          <source
            :src="this.$route.query.movie.movieMovie"
            type="video/mp4"
          >
        </video>
        <h3>Description: {{this.$route.query.movie.descriptionMovie}}</h3>
    </div>
</template>

<script>
import store from '../store/store'
export default {
    props:['movie'],
    store:store, 
    data: function(){
        return {
            movies: {},
        };
    },
    mounted:function(){
        console.log(this.$route.query.movie)
    },
}
</script>

<style lang="scss">


</style>