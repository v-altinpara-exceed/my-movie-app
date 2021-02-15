<template>
  <form v-on:submit.prevent='scanMovies'>
      <input
        v-model='scanMovie'
        id='scan-movie'
        placeholder='Scan movie'
      >
      <button>scan</button>
    </form>
</template>

<script>
export default {

    data:function(){
        return {
            scanMovie: '',
        }
    },

    methods:{   
        scanMovies(){
            console.log(this.scanMovie)
            this.scanMovie=''
        },  
    },

}
</script>

<style>

</style>