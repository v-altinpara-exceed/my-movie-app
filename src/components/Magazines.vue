<template>
    <div class="container">
        <div 
            class="row"
            v-for="(option, key) in options"    
            v-bind:key="key"
        >
    
            <div class="mt-2 col col-12" v-if="moviegenre(option)" >{{option}}</div>
            <Genres
                v-for="(movie, key) in movies.filter(t=> t.genreMovie === option)"
                v-bind:key="key" 
                v-bind:option="option"
                v-bind:movie="movie"
                @delete-movie='deleteMovie'
                @redact-movie='redactMovie'
            />
        </div> 
    </div>
</template>

<script>
import store from '../store/store'
import Genres from './Genres'   


export default {
    name:'imageUpload',
        
    store:store,
    components:{
        Genres
    },

    data: function(){
        return{
            movies:store.state.movies,
            options:store.state.options,
        }
    },
    methods:{
        moviegenre(option){
            return ((this.movies.filter(t=> t.genreMovie === option)).length >0)
        },

        deleteMovie(id){
            this.movies= this.movies.filter(t=> t.id !== id)
            store.commit('deleteMovie',this.movies)
        },
        redactMovie(movie){
            store.commit('redactMovie',movie)
        }
    }
}
</script>

<style>
    .container {
        width: 100%;
        padding: 12px;
        margin-right: auto;
        margin-left: auto;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        flex: 1 1 auto;
        margin: -12px;
    }
    .v-application .mt-2 {
        margin-top: 8px!important;
    }
    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
</style>