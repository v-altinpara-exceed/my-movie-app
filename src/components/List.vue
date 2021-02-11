<template>
    <div>
        <button v-on:click="test">ADD</button>
        <div 
            v-for="(movie,key) in movies"
            v-bind:key="key"
        >
        <h1>{{movie.nameMovie}}</h1>
        <h3>{{movie.descriptionMovie}}</h3>
        </div>
    </div>
</template>

<script>
import store from '../store/store'

export default {
    data: function(){
        return {
            movies:[{
                id: 0,
                nameMovie: 100,
                descriptionMovie: 1000,
            },]
        }
    },
    methods:{   
        test(){
            store.commit('increment');  
            this.movies.push(store.state.movies[store.state.movies.length - 1]);
            console.log(this.movies);
        },
    },
}
</script>

<style>

</style>