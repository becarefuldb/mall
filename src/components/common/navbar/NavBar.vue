<template>
  <div class='navBar'>
    <div class="navBar-left"><slot name="navBar-left"></slot></div>
    <div class="navBar-center"><slot name="navBar-center"></slot></div>
    <div class="navBar-right"><slot name="navBar-right"></slot></div>    
  </div>
</template>
  
<script>
export default {
  name: 'NavBar',
  data() {
    return {};
  },
};
</script>


<style scoped>
 .navBar{   
   /* position: relative; */
   display: flex;
   height: 44px;
   line-height: 44px;
   /* background-color:var(--color-high-text);   */
   text-align: center;  
   /* position: fixed; */
   top: 0;left: 0;right: 0;
   z-index: 99;
   /* box-shadow: 0px -3px 5px rgba(100, 100, 100,0.5) */
 }
 .navBar-left,.navBar-right{
   width: 66px;     
 }
 .navBar-center{
   /* color: white; */
   flex: 1;
 }
</style>