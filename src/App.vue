<template>
  <div id="app">
    <main-tab-bar class="tabBar"></main-tab-bar>   
     <!--keep-alive 保证组件不被销毁  -->
    <keep-alive exclude="Detail"><router-view/></keep-alive> 
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
 @import 'assets/tabbar/css/base.css';
 
</style>
