<template>
  <v-app>
    <List/>
  </v-app>
</template>

<script>
import List from "./components/List"

export default {
  name: 'App',
  
  components: {
    List,
  },
};
</script>
