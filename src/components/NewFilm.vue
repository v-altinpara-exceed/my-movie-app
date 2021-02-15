<template>
  <div style="text-align: start;">
    <div v-show="!movieCreationWindow">
      <button v-on:click='()=>this.movieCreationWindow = true'>Add movie</button>
    </div>
    <div v-show="movieCreationWindow">
      <form class="createMovie" v-on:submit.prevent='addMovie'> 
        <input  
          v-model='movie.nameMovie'
          type="text"
          placeholder='nameMovie'
        >
        <input 
          v-model='movie.descriptionMovie'
          type="text"
          placeholder='descriptionMovie'
        >
  
        <p>
          ADD genre:
          <select v-model="movie.genreMovie" > 
            <option v-for="(option, key) in options" v-bind:key="key" v-bind:value="option">
              {{ option }}
            </option>
          </select>
        </p>
        <input type="file" accept="image/jpeg" @change=uploadImage>
        
        <input type="file" accept="video/mp4" @change=uploadVideo>
        <button>OK</button>
      </form>
      <button v-on:click='close'>Close</button> 
    </div>
  </div>
</template>

<script>

import store from '../store/store'

export default {

  data: function(){
    return{
      movieCreationWindow: false,
      movie:{
        nameMovie: '',
        descriptionMovie: '',
        genreMovie: '',
        posterMovie: null,
        movieMovie: null,
      },
      options:store.state.options,
    }
  },

  store:store,

  methods:{
    addMovie(){
      this.movieCreationWindow = false;
      store.commit('increment',this.movie)
      this.movie.nameMovie=''
      this.movie.descriptionMovie=''
      this.movie.genreMovie = ''
      this.movie.posterMovie = null
      this.movie.movieMovie = null
    },

    close(){
      this.movieCreationWindow = false;
      this.movie.nameMovie=''
      this.movie.descriptionMovie=''
      this.movie.genreMovie = ''
      this.movie.posterMovie = null
      this.movie.movieMovie = null
    },

    uploadImage(e){
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e =>{
          this.movie.posterMovie = e.target.result;
        };
    },
    uploadVideo(e){
        const video = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(video);
        reader.onload = e =>{
          this.movie.movieMovie = e.target.result;
        };
    },
  },
}
</script>

<style>
  .createMovie{
    height: 178px;
    display: table-caption;
    text-align: start;
  }
</style>