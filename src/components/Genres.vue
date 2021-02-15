<template>
    <div class="col-md-2 col-6">
        <div class='content' v-show="!isEditing">
            <div class="poster" :style="{'background-image': 'url(' +movie.posterMovie + ')'}">
                <button class="redactMovie" v-on:click="redactMovie">...</button>
                <span class="deleteMovie" v-on:click="$emit('delete-movie', movie.id)">X</span>
                <a href="#">
                    <span class="circle">
                        <span class="triangle"></span>
                    </span>
                </a>
            </div>
            <h3>{{movie.nameMovie}}</h3>
        </div>
        <div class='content' v-show="isEditing">
            <form class="createMovie" v-on:submit.prevent="$emit('redact-movie', movies)"> 
                <input  
                    v-model='movies.nameMovie'
                    type="text"
                    placeholder='nameMovie'
                >
                <input 
                    v-model='movies.descriptionMovie'
                    type="text"
                    placeholder='descriptionMovie'
                >

                <p>
                    ADD genre:
                    <select v-model="movies.genreMovie" > 
                        <option v-for="(option, key) in options" v-bind:key="key" v-bind:value="option">
                            {{ option }}
                        </option>
                    </select>
                </p>
                <input type="file" accept="image/jpeg" @change=uploadImage>

                <input type="file" accept="video/mp4" @change=uploadVideo>
                <button v-on:click='close' >OK</button>
            </form>
            <button v-on:click='close'>Close</button>
        </div>
    </div>  
</template>
    
<script>

import store from '../store/store'

export default {
    props:['movie'],
    store:store,

    data: function(){
        return {
            isEditing: false,
            options:store.state.options,
            movies: {},
        };
    },

    methods:{
        redactMovie() {
            this.isEditing = true;
            this.movies.nameMovie=this.movie.nameMovie
            this.movies.descriptionMovie=this.movie.descriptionMovie
            this.movies.genreMovie=this.movie.genreMovie
            this.movies.posterMovie=this.movie.posterMovie
            this.movies.movieMovie=this.movie.movieMovie
        },
        close(){
            this.isEditing = !this.isEditing;
        },
        uploadImage(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.movies.posterMovie = e.target.result;
            };
        },
        uploadVideo(e){
            const video = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(video);
            reader.onload = e =>{
                this.movies.movieMovie = e.target.result;
            };
        },
    },
}
</script>

<style>
    .col-md-2 {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%;
        margin: 10px 10px 0 10px;
    }
    .poster{
        height: 150px;
        background-size: cover;

    }
    .deleteMovie{
        background-color:rgba(0, 0, 0, 0.37);
        color: red;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        float: right;
    }
    
    .redactMovie{
        background-color:rgba(255, 255, 255, 0.404);
        width: 22px;
        height: 22px;
        border-radius: 50%; 
        float: left;
    }

    a{
        height: 10em;
        display: flex;
        align-items: center;
        justify-content: center
    }

    a .circle { 
        display: inline-block;
        border: transparent;
        border-radius: 25px;
        padding: 20px;
        height: 10px;
        width: 10px;
    }
    a .circle .triangle {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: transparent;
        transform: translate(-25%, -50%);
    }

    a:hover .circle {
        border: 3px solid white;
        transition: 0.3s;
    }

    a:hover .triangle {
        border-left: 10px solid white;
        transition: 0.3s;
    }

</style>