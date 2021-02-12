<template>
    <div>
        <div 
            v-for="(option, key) in options"    
            v-bind:key="key"
        >
    
            <h1 v-if="moviegenre(option)" >{{option}}</h1>
            <Genres
                v-for="(movie, key) in movies.filter(t=> t.genreMovie === option)"
                v-bind:key="key" 
                v-bind:option="option"
                v-bind:movie="movie"
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
    }
}
</script>

<style>

</style>