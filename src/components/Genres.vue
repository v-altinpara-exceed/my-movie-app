<template>
    <div>
        <img :src="movie.posterMovie" alt=""> 
        <h3>{{movie.nameMovie}}</h3>
    </div>  
</template>

<script>
export default {
    props:['movie', 'option'],
}
</script>

<style>

</style>