<template>
  <div id="app">    
     <!--keep-alive 保证组件不被销毁  -->
    <keep-alive exclude="Detail"><router-view/></keep-alive> 
    <main-tab-bar class="tabBar"></main-tab-bar>   
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
 #app{
   position: relative;
 }
 .tabBar{
   position: relative;

 }
</style>
