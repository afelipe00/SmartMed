<template>
  <div id="app">
    <Home/>
    <!--Users/-->
  </div>
</template>

<script>
import Users from '../components/Users.vue'
import Home from '../components/Home.vue' 
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
  
  #app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #Cc3e50;
    margin-top: 60px;
  }

</style>