<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>    
    <router-view/>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar/mainTabBar.vue'
export default {
  name: 'App',
  components:{
    mainTabBar   
  }
}
</script>

<style>
 @import 'assets/tabbar/css/base.css'
</style>
